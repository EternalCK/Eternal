export type Friend = {
  title: string;
  description?: string;
  website: string;
  avatar?: any;
};

export const Friends: Friend[] = [
  // https://www.unmz.net/
  {
    title: '主站',
    description: '主力服务器',
    website: 'https://www.cwkl.love',
    avatar: 'https://pic.cwkl.love/css/avatar.png',
  },
];

export function sortFriend() {
  const result = Friends;

  return result;
}
