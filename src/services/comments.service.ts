import CommentsRepo from '../repos/comments.repo';
const create = async (payload: any) => CommentsRepo.create(payload);
const listByPost = async (postId: string) => CommentsRepo.findByPost(postId);
export default { create, listByPost };
