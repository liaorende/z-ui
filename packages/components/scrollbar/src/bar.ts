export interface scrollbarInject {
  wrapElement: HTMLDivElement
  viewElement: HTMLDivElement
  isShow: boolean
}

export const barProps = {
  vertical: {
    type: Boolean
  },
  horizontal: {
    type: Boolean
  },
  width: {
    type: String
  },
  height: {
    type: String
  },
  scrollX: {
    type: Number
  },
  scrollY: {
    type: Number
  },
  always: {
    type: Boolean
  }
}

export const BAR_MAP = {
  vertical: {
    offset: 'offsetHeight',
    scroll: 'scrollTop',
    client: 'clientY',
    scrollSize: 'scrollHeight',
    direction: 'top'
  },
  horizontal: {
    offset: 'offsetWidth',
    scroll: 'scrollLeft',
    client: 'clientX',
    scrollSize: 'scrollWidth',
    direction: 'left'
  }
} as const
