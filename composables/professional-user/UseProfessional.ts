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

  const createProfessional = async () => {};
  const getProfessional = async () => {};
  const getProfessionalDetails = async () => {};
  const editProfessionalProfileDetails = async (newProfile: ProfessionalProfile) => {
    console.log(newProfile, 'newProfile');

    const updatedProfile = await patchProfessionalProfileDetails(newProfile);
    console.log(updatedProfile, 'updatedProfile');

    setProfessionalUser(updatedProfile);
  };
  const getProfessionalProfileForClient = async () => {};
  const updateProfessionalBannerPicture = async () => {};

  return { editProfessionalProfileDetails };
};
