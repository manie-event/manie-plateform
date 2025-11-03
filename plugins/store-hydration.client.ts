// plugins/userStore-init.client.ts
import { useUserStore } from '~/stores/userStore';

export default defineNuxtPlugin(() => {
  const userStore = useUserStore();

  // 🧠 Hydratation propre et réactive du store depuis le localStorage
  const isProfessional = localStorage.getItem('is-professional') === 'true';
  const isProfileCreated = localStorage.getItem('pp-created') === 'true';
  const proName = localStorage.getItem('pro-name');
  const clientName = localStorage.getItem('client-name');
  const clientUuid = localStorage.getItem('client-uuid');
  const professionalUuid = localStorage.getItem('professional-uuid');

  userStore.$patch({
    isProfessional,
    isProfileCreated,
    proName,
    clientName,
    clientUuid,
    professionalUuid,
  });
});
