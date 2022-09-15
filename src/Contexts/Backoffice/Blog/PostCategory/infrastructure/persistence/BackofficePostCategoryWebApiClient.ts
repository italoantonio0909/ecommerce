import { BackofficePostCategoryRepository } from '../../domain/BackofficePostCategoryRepository';
import { BackofficePostCategory } from '../../domain/BackofficePostCategory';
import firestore from '../../../../../../apps/Sales/database';

export class BackofficePostCategoryWebApiClient implements BackofficePostCategoryRepository {

    constructor() { }

    async save(category: BackofficePostCategory): Promise<void> {
        const ref = firestore.collection('post_category').doc();

        await ref.set({
            title: category.title.value,
            description: category.description.value,
            created_at: category.created_at
        });
    }

    async find(title: string): Promise<BackofficePostCategory> {
        const ref = firestore.collection('post_category').where("title", "==", title);
        const snapshot = await ref.get();

        if (snapshot.empty) {
            return null;
        }

        return snapshot.docs[0].data() as BackofficePostCategory
    }
}
