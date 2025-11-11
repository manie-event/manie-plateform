<template>
  <v-dialog v-model="openModal" max-width="600" transition="dialog-bottom-transition">
    <v-card class="rounded edit-professional">
      <Icon
        icon="ri:close-fill"
        size="22"
        class="text-grey100 cursor-pointer"
        :style="{ position: 'absolute', right: '20px', top: '20px' }"
        @click="openModal = false"
      />

      <v-form class="edit-professional__formulaire">
        <div v-if="currentPage === 1">
          <v-divider class="mt-6">
            <p class="mt-6">À propos de votre entreprise</p>
          </v-divider>

          <v-text-field
            class="mt-6"
            label="Le nom de votre entreprise"
            v-model="profile.name"
            :error-messages="showErrors ? errors.name : undefined"
          />

          <v-text-field
            label="Nom complet de l'interlocuteur principal"
            v-model="profile.mainInterlocutor"
            :error-messages="showErrors ? errors.mainInterlocutor : undefined"
          />

          <v-text-field
            label="Numéro de SIRET"
            v-model="profile.siret"
            :error-messages="showErrors ? errors.siret : undefined"
          />

          <v-text-field
            label="Adresse complète du siège social"
            v-model="profile.address"
            :error-messages="showErrors ? errors.address : undefined"
          />

          <v-divider class="border-opacity-50 mb-6">
            <p class="mb-6">À propos de votre activité</p>
          </v-divider>

          <v-text-field
            label="Courte description de votre activité"
            v-model="profile.bio"
            :error-messages="showErrors ? errors.bio : undefined"
          />

          <v-number-input
            label="Depuis quelle année exercez-vous cette activité"
            v-model="profile.experience"
            control-variant="hidden"
            :min="0"
            :error-messages="showErrors ? errors.experience : undefined"
          />

          <v-select
            label="Votre secteur géographique"
            v-model="profile.geographicArea"
            :items="geographicActivity"
            item-title="label"
            item-value="value"
            :error-messages="showErrors ? errors.geographicArea : undefined"
          />

          <!-- Certifications -->
          <div>
            <div
              v-for="(certif, index) in profile.certification"
              :key="index"
              class="flex items-center gap-2 mb-3"
            >
              <v-text-field
                v-model="profile.certification[index]"
                label="Certification(s) & Label(s)"
                variant="outlined"
                placeholder="Exemple : Label AB (Bio)"
                hide-details
                class="flex-1"
              />
              <Icon
                v-if="profile.certification.length > 1"
                width="24"
                height="24"
                icon="solar:trash-bin-trash-line-duotone"
                color="error"
                size="small"
                @click="removeCertification(index)"
              />
            </div>

            <v-btn
              color="rgb(var(--v-theme-darkbg))"
              style="color: rgb(var(--v-theme-background))"
              class="mb-5"
              @click="addCertification"
            >
              Ajouter une certification
            </v-btn>
          </div>

          <v-number-input
            control-variant="hidden"
            :min="0"
            label="Délai de réservation minimum (en semaine)"
            v-model="reservationDelay"
            :error-messages="showErrors ? errors.minimumReservationPeriod : undefined"
          />

          <v-divider class="text-subtitle-1 font-weight-medium">
            Vous souhaitez être payé (restant dû) ?
          </v-divider>

          <div class="d-flex align-center justify-center gap-2">
            <v-label class="text-subtitle-1 font-weight-medium">Avant la prestation</v-label>
            <v-switch
              v-model="profile.billingPeriod"
              false-value="beforeEvent"
              true-value="afterEvent"
              :color="
                profile.billingPeriod === 'beforeEvent' ? 'success' : 'rgb(var(--v-theme-darkbg))'
              "
              hide-details
            />
            <v-label class="text-subtitle-1 font-weight-medium">Après la prestation</v-label>
          </div>

          <v-divider class="mb-6">
            <p class="mb-6">À propos de votre communication</p>
          </v-divider>

          <v-text-field
            label="Votre numéro de téléphone"
            v-model="profile.telephone"
            :error-messages="showErrors ? errors.telephone : undefined"
          />

          <!-- Liens -->
          <div class="mt-4">
            <div v-for="(link, index) in profile.links" :key="index">
              <v-select
                v-model="link.type"
                label="Réseau social ou site web"
                :items="['Facebook', 'Instagram', 'LinkedIn', 'Youtube', 'Twitter', 'Site Web']"
              />
              <v-text-field
                v-model="link.value"
                label="Lien vers le réseau social ou site web"
                type="url"
                variant="outlined"
                placeholder="https://www.example.com"
              />
              <v-btn
                @click="removeLink(index)"
                :disabled="profile.links.length <= 0"
                color="error"
                size="small"
                class="mb-4 text-center"
              >
                Supprimer
              </v-btn>
            </div>
            <v-btn
              @click="addLink"
              color="rgb(var(--v-theme-darkbg))"
              style="color: rgb(var(--v-theme-background))"
            >
              Ajouter un lien
            </v-btn>
          </div>

          <!-- FAQ -->
          <div class="my-8">
            <div v-for="(faq, index) in faqArray" :key="index">
              <v-text-field v-model="faq.question" label="Question fréquente" />
              <v-text-field v-model="faq.reponse" label="Réponse" type="text" variant="outlined" />
              <v-btn
                @click="removeFaq(index)"
                :disabled="faqArray.length === 0"
                color="error"
                size="small"
                class="my-2"
              >
                Supprimer
              </v-btn>
            </div>
            <v-btn
              @click="addFaq"
              color="rgb(var(--v-theme-darkbg))"
              style="color: rgb(var(--v-theme-background))"
            >
              Ajouter une question fréquente
            </v-btn>
          </div>
        </div>

        <!-- Boutons d’action -->
        <div class="d-flex justify-space-between edit-professional__btn">
          <v-btn @click="openModal = false">Annuler</v-btn>
          <v-btn
            v-if="!isProfileCreated"
            color="rgb(var(--v-theme-darkbg))"
            style="color: rgb(var(--v-theme-background))"
            @click="createProfile(profile)"
          >
            Valider mon profil
          </v-btn>
          <v-btn
            v-else
            class="edit-professional__btn-width"
            color="rgb(var(--v-theme-darkbg))"
            style="color: rgb(var(--v-theme-background))"
            @click="modifyProfile(profile)"
          >
            Modifier mon profil
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </v-dialog>

  <Teleport to="body">
    <ModalRedirection :redirection="'dashboard2'" v-model="isProfilUpdate" />
    <CommonSuccessToaster />
    <error-toaster />
  </Teleport>
</template>
