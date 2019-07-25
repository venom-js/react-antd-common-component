export const commonDrawerState = {
  visible: false,
  confirmLoading: false,
  loading: true
};

export type CommonDrawerState = Partial<typeof commonDrawerState>;

export function reducer(
  state: CommonDrawerState,
  { type, payload }
): CommonDrawerState {
  switch (type) {
    case 'setState':
      return { ...state, ...payload };
    default:
      throw new Error();
  }
}
