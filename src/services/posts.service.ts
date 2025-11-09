import PostsRepo from '../repos/posts.repo';
import emailQueue from '../queue/emailQueue';
const list = async () => PostsRepo.list();
const get = async (id: string) => PostsRepo.get(id);
const create = async (payload: any) => PostsRepo.create(payload);
const update = async (id: string, payload: any) => PostsRepo.update(id, payload);
const remove = async (id: string) => PostsRepo.remove(id);
const publish = async (id: string) => {
  const post = await PostsRepo.publish(id);
  await emailQueue.add('post-published', { postId: id });
  return post;
};
export default { list, get, create, update, remove, publish };
