import { Partner } from "./Partner";

export interface PartnerRepository {
<<<<<<< HEAD
    save(partner: Partner): Promise<void>;
=======
    create(partner: Partner): Promise<Partner>;
>>>>>>> 1acc7971300af8f299b55c1b41ec6b9c68a71ff3
}