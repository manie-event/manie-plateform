<script setup>
import { Form } from 'vee-validate';
import * as Yup from 'yup';
import TextInput from './TextInput.vue';

function onSubmit(values) {
  alert(JSON.stringify(values, null, 2));
}

function onInvalidSubmit() {
  const submitBtn = document.querySelector('.submit-btn');
  submitBtn.classList.add('invalid');
  setTimeout(() => {
    submitBtn.classList.remove('invalid');
  }, 1000);
}

// Using yup to generate a validation schema
// https://vee-validate.logaretm.com/v4/guide/validation#validation-schemas-with-yup
const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref('password')], 'Passwords do not match'),
});
</script>

<template>
  <div>
    <Form @submit="onSubmit" :validation-schema="schema" @invalid-submit="onInvalidSubmit">
      <v-row>
        <v-col cols="12">
          <div class="mb-2 font-weight-medium text-subtitle-1">Email</div>
          <TextInput
            name="email"
            type="email"
            id="valemail"
            success-message="Got it, we won't spam you!"
            label=""
          />
        </v-col>
        <v-col cols="12">
          <div class="mb-2 font-weight-medium text-subtitle-1">Password</div>
          <TextInput
            name="password"
            id="valpwd"
            type="password"
            success-message="Nice and secure!"
            label=""
          />
        </v-col>
        <v-col cols="12">
          <div class="d-sm-flex align-center mb-4">
            <v-checkbox
              density="compact"
              hide-details
              color="primary"
              label="Remember this Device"
            ></v-checkbox>
            <div class="ml-auto">
              <a href="javascript:void(0)" class="text-primary text-decoration-none"
                >Forgot password?</a
              >
            </div>
          </div>
          <v-btn type="submit" class="submit-btn mt-2" rounded="pill" color="primary">Submit</v-btn>
        </v-col>
      </v-row>
    </Form>
  </div>
</template>
