import { Partner } from "./Partner";

export interface PartnerRepository {
    save(partner: Partner): Promise<void>;
}