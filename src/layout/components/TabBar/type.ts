import type { TabbarItemProps } from 'vant';

export type LayoutNavProps = {
  option: ({ title: string; name: string } & Partial<TabbarItemProps>)[];
};
