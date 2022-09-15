import { BackofficePartner } from './BackofficePartner';

export interface BackofficePartnerRepository {
    create(partner: BackofficePartner): Promise<BackofficePartner>;
}