import { atom } from 'recoil';

interface autoGreetingTitleProps {
  title: string;
  content: string;
}

export const firstIsStart = atom<boolean>({
  key: 'firstIsStart',
  default: false,
});

export const firstArsTextAreaContent = atom<string>({
  key: 'firstArsTextAreaContent',
  default: '',
});

export const autoGreetingTitle = atom<autoGreetingTitleProps>({
  key: 'autoGreetingTitle',
  default: { title: 'Tab 1', content: '텍스트' },
});

export const autoGreetingMenu = atom({
  key: 'autoGreetingMenu',
  default: '',
});
