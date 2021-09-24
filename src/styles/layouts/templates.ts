export interface TemplateProps {
  box: object;
  box_wrap: object;
  carousel?: object;
  datetime_enabled: boolean;
  image: object;
  title: object;
  section?: object;
  subject: object;
  subtitle: object;
}

export const TEMPLATES_DEFAULT = {
  '100': {
    slot100: {
      slot: 'slot1.list1',
      layout: {
        0: ['image_large_left'],
        1: ['image_large_left'],
        2: ['image_large_left', 'related'],
        3: ['image_large_left', 'related', 'related'],
        4: ['image_large_left', 'related', 'related', 'related']
      }
    }
  },
  '7030': {
    slot70: {
      slot: 'slot1.list1',
      layout: {
        0: ['default'],
        1: ['default'],
        2: ['default', 'default'],
        3: ['default', 'default', 'default'],
        4: ['default', 'default', 'default', 'default']
      }
    },
    slot30: {
      slot: 'slot2.list1',
      layout: {
        0: ['image_large_left'],
        1: ['image_large_left'],
        2: ['image_large_left', 'related'],
        3: ['image_large_left', 'related', 'related'],
        4: ['image_large_left', 'related', 'related', 'related']
      }
    }
  },
  '33': {
    slotLeft: {
      slot: 'slot1.list1',
      layout: {
        0: ['default'],
        1: ['default'],
        2: ['default', 'default'],
        3: ['default', 'default', 'default'],
        4: ['default', 'default', 'default', 'default']
      }
    },
    slotCenter: {
      slot: 'slot2.list1',
      layout: {
        0: ['image_large_left'],
        1: ['image_large_left'],
        2: ['image_large_left', 'related'],
        3: ['image_large_left', 'related', 'related'],
        4: ['image_large_left', 'related', 'related', 'related']
      }
    },
    slotRight: {
      slot: 'slot3.list1',
      layout: {
        0: ['image_large_left'],
        1: ['image_large_left'],
        2: ['image_large_left', 'related'],
        3: ['image_large_left', 'related', 'related'],
        4: ['image_large_left', 'related', 'related', 'related']
      }
    }
  }
}