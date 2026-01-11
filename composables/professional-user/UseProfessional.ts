import type { ProfessionalProfile } from '~/models/user/UserModel';
import { useProfessionalProfileService } from '~/services/UseProfessionalProfileService';

export const useProfessional = () => {
  const {
    createProfessionalProfile,
    getProfessionalProfile,
    getProfessionalProfileDetails,
    patchProfessionalProfileDetails,
    getProfessionalProfileForCustomer,
    changeProfessionalBannerPicture,
  } = useProfessionalProfileService();

  const { setProfessionalUser } = useProfilStore();

  const createProfessional = async (professionalProfil: ProfessionalProfile) => {
    await createProfessionalProfile(professionalProfil);
  };
  const getProfessional = async () => {};
  const getProfessionalDetails = async () => {
    const profilDetails = await getProfessionalProfileDetails();
    setProfessionalUser(profilDetails);
  };
  const editProfessionalProfileDetails = async (newProfile: ProfessionalProfile) => {
    const updatedProfile = await patchProfessionalProfileDetails(newProfile);
    setProfessionalUser(updatedProfile);
  };
  const getProfessionalProfileForClient = async () => {};
  const updateProfessionalBannerPicture = async (updatedProfil: ProfessionalProfile) => {};

  return { createProfessional, getProfessionalDetails, editProfessionalProfileDetails };
};
