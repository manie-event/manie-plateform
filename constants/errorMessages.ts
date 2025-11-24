export const ERROR_MESSAGES = {
  'email already exists': "L'adresse e-mail est déjà utilisée.",
  'The password field format is invalid': 'Le format du champ mot de passe est invalide.',
  'The confirmPassword field and password field must be the same':
    'Le champ de confirmation du mot de passe et le champ mot de passe doivent être identiques.',
  'The username field must be defined': 'Le champ nom d’utilisateur doit être défini.',
  'The email field must be defined': "Le champ d'adresse e-mail doit être défini.",
  'The password field must be defined': 'Le champ mot de passe doit être défini.',
  'The email field must be a valid email address':
    "Le champ d'adresse e-mail doit être une adresse e-mail valide.",
  'User not found or invalid': 'Utilisateur non trouvé ou invalide.',
  'The email has already been taken': "L'adresse e-mail a déjà été prise.",
  'Invalid user credentials': 'Identifiants utilisateur invalides, veuillez réessayer.',
  'insert into "users" ("category", "created_at", "email", "password", "updated_at", "username", "uuid") values ($1, $2, $3, $4, $5, $6, $7) returning "id" - duplicate key value violates unique constraint "users_email_unique"':
    "L'adresse e-mail est déjà utilisée, veuillez en choisir une autre.",
  'You do not have enough credits to accept this event service proposition':
    "Vous n'avez pas assez de jeton pour vous positionner, veuillez en racheter",
  'You cannot delete this professional service because it is used by event service propositions':
    'Vous ne pouvez pas supprimer ce service car il est utilisé dans une proposition commerciale',
};
