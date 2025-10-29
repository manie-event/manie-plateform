<template>
  <div class="success-container">
    <div class="success-card">
      <!-- Success state -->
      <div class="success-state">
        <div class="success-icon">✅</div>
        <h1>Paiement réussi !</h1>
        <p>Merci pour votre achat. Votre commande a été confirmée.</p>
        <p>Redirection vers le dashboard dans 3secondes</p>

        <div class="payment-details" v-if="paymentData">
          <h3>Détails de la commande :</h3>
          <div class="detail-item">
            <span>ID de session :</span>
            <code>{{ sessionId }}</code>
            <h2>Félicitation paiement effectué</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePaiementJeton } from '~/composables/professional-user/UsePaiementJeton';

// Métadonnées de la page
definePageMeta({
  title: 'Paiement réussi',
  description: 'Confirmation de votre paiement',
});

// Récupération du session_id depuis l'URL
const route = useRoute();
const router = useRouter();
const { processStripeReturn } = usePaiementJeton();
const userStore = useUserStore();
const { ProfessionalProfile } = storeToRefs(userStore);

const sessionId = computed(() => route.query.session_id);

// Fonctions utilitaires
const formatAmount = (amount, currency) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: currency?.toUpperCase() || 'EUR',
  }).format(amount / 100); // Stripe utilise les centimes
};

// SEO
useHead({
  title: 'Paiement réussi - Manie Event',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
});
onMounted(async () => {
  if (!sessionId.value) return;

  const result = await processStripeReturn(sessionId.value);

  if (!result.success) {
    console.error('Paiement non validé:', result.message);
  } else {
    setTimeout(() => {
      navigateTo('/dashboards/dashboard2', { replace: true });
    }, 3000);
  }
});
</script>

<style scoped>
.success-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.success-card {
  background: white;
  border-radius: 16px;
  padding: 40px;
  max-width: 500px;
  width: 100%;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  text-align: center;
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.success-state,
.error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.success-icon,
.error-icon {
  font-size: 64px;
  margin-bottom: 10px;
}

h1 {
  color: #1f2937;
  font-size: 28px;
  font-weight: 700;
  margin: 0;
}

p {
  color: #6b7280;
  font-size: 16px;
  margin: 0;
  line-height: 1.5;
}

.payment-details {
  background: #f9fafb;
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  text-align: left;
  margin: 20px 0;
}

.payment-details h3 {
  color: #1f2937;
  font-size: 18px;
  margin: 0 0 15px 0;
  text-align: center;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #e5e7eb;
}

.detail-item:last-child {
  border-bottom: none;
}

.detail-item span:first-child {
  font-weight: 500;
  color: #374151;
}

.detail-item code {
  background: #e5e7eb;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 12px;
}

.actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.btn {
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-primary:hover {
  background: #5a67d8;
  transform: translateY(-1px);
}

.btn-secondary {
  background: #f3f4f6;
  color: #374151;
}

.btn-secondary:hover {
  background: #e5e7eb;
}

@media (max-width: 640px) {
  .success-card {
    padding: 30px 20px;
    margin: 10px;
  }

  .actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}
</style>
