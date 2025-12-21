<template>
  <v-dialog v-model="dialogOpen" width="800">
    <v-card class="pa-4">
      <Icon
        icon="ri:close-fill"
        size="22"
        class="text-grey100 cursor-pointer"
        :style="{ position: 'absolute', right: '20px', top: '20px' }"
        @click="dialogOpen = false"
      />
      <!-- Services existants -->
      <v-alert
        color="rgb(var(--v-theme-darkbg))"
        style="color: rgb(var(--v-theme-background))"
        class="w-auto p-5 mb-5 event-service__alert"
      >
        Chaque secteur d'activité sélectionné ne pourra pas être modifié une fois la mise en
        relation commencée
      </v-alert>

      <div v-for="(service, serviceIndex) in eventServices" :key="serviceIndex" class="mb-6">
        <div class="d-flex justify-space-between align-center mb-2">
          <v-btn
            v-if="eventServices.length > 1"
            size="small"
            color="red"
            variant="outlined"
            @click="removeEventService(serviceIndex)"
          >
            Supprimer
          </v-btn>
        </div>

        <div>
          <h4>De quoi avez-vous besoin de plus?</h4>
          <v-select
            v-model="service.selectedSector"
            :items="sectorFiltered"
            item-title="label"
            item-value="value"
            clearable
            class="my-3"
            placeholder="Sélectionnez un secteur"
            @update:modelValue="
              service.selectedSector && updateServiceSector(service.selectedSector)
            "
          />
        </div>

        <div v-if="service.selectedSector">
          <div
            v-for="question in getFilteredQuestionsForService(service.selectedSector)"
            :key="question.sector + question.category"
            v-if="service.selectedSector"
            class="m-4"
          >
            <h4 class="my-4">{{ question.question }}</h4>
            <div v-if="question.isService">
              <v-btn
                v-for="answer in question.answers"
                :key="answer.uuid"
                :color="
                  service.selectedServiceId === answer.uuid
                    ? 'rgb(var(--v-theme-darkbg))'
                    : 'default'
                "
                :style="{
                  color: service.selectedServiceId === answer.uuid ? 'white' : 'black',
                }"
                :variant="service.selectedServiceId === answer.uuid ? 'flat' : 'outlined'"
                @click="selectServiceForIndex(serviceIndex, answer.uuid)"
              >
                {{ answer.name }}
              </v-btn>
            </div>

            <div class="d-flex flex-wrap gap-2" v-else>
              <v-chip
                v-for="answer in question.answers"
                :key="answer.id"
                :style="{
                  color: service.selectedKeywords.includes(answer.uuid) ? 'white' : 'black',
                }"
                :variant="service.selectedKeywords.includes(answer.uuid) ? 'flat' : 'outlined'"
                @click="toggleKeywordForService(serviceIndex, answer.uuid)"
              >
                {{ answer.value }}
              </v-chip>
            </div>
          </div>
        </div>
        <div v-else>
          <CommonLoader width="100" height="100"></CommonLoader>
        </div>
      </div>

      <v-row class="d-flex justify-space-between align-center">
        <v-col cols="12" md="6" class="w-100">
          <v-btn
            color="rgb(var(--v-theme-darkbg))"
            variant="outlined"
            class="event-service__btn"
            @click="addNewServiceForm"
          >
            Ajouter un nouveau service
          </v-btn>
        </v-col>
        <v-col cols="12" md="3">
          <v-btn
            @click="sendNewEventService"
            color="rgb(var(--v-theme-darkbg))"
            style="color: rgb(var(--v-theme-background))"
            class="event-service__btn w-100"
          >
            Enregistrer
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import CommonLoader from '@/components/common/Loader.vue';
import { Icon } from '@iconify/vue';
import { useAddNewEventService } from '~/composables/event-service/UseAddNewEventService';
import type { eventModel } from '~/models/events/eventModel';

const props = defineProps<{ event: eventModel }>();

const dialogOpen = defineModel<boolean>('addServiceOpen', { default: false });

const { eventServices } = storeToRefs(useEventServiceStore());
const { addSuccess } = useToaster();

const {
  sectorFiltered,
  addNewServiceForm,
  removeEventService,
  selectServiceForIndex,
  toggleKeywordForService,
  updateServiceSector,
  getFilteredQuestionsForService,
  addNewEventService,
} = useAddNewEventService();

const sendNewEventService = async () => {
  await addNewEventService(props.event.uuid);
  addSuccess('Service(s) ajouté(s) avec succès');
  dialogOpen.value = false;
};
</script>

<style lang="scss" scoped>
.add-event {
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: flex-end;
}
.event-service {
  &__alert {
    min-height: 50px;
  }
  &__btn {
    width: auto;
  }
}

@media screen and (max-width: 600px) {
  .event-service {
    &__alert {
      min-height: 100px;
    }
    &__btn {
      width: 100%;
    }
  }
}
</style>
