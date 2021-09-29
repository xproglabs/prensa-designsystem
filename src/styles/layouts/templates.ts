export const TEMPLATES_FEATURED = {
  slot100: {
    related: {
      enabled: true
    },
    slot: 'slot1.list1',
    layout: {
      0: ['featured_related'],
      1: ['featured_related'],
      2: ['featured_related', 'hide'],
      3: ['featured_related', 'hide', 'hide'],
      4: ['featured_related', 'hide', 'hide', 'hide'],
    }
  }
}

export const TEMPLATES_DEFAULT = {
  slot100: {
    slot: 'slot1.list1',
    layout: {
      0: ['image_large_left'],
      1: ['image_large_left'],
      2: ['image_large_left', 'related'],
      3: ['image_two', 'image_two', 'featured'],
      4: ['image_two', 'image_two', 'mostread', 'mostread'],
    }
  },
  slot70: {
    slot: 'slot1.list1',
    layout: {
      0: ['image_two'],
      1: ['image_two'],
      2: ['image_two', 'image_two'],
      3: ['image_two', 'image_two', 'image_two'],
      4: ['image_two', 'image_two', 'image_two', 'image_two']
    }
  },
  slot30: {
    slot: 'slot2.list1',
    layout: {
      0: ['mostread'],
      1: ['mostread'],
      2: ['mostread', 'mostread'],
      3: ['mostread', 'mostread', 'mostread'],
      4: ['mostread', 'mostread', 'mostread', 'mostread']
    }
  },
  slotLeft: {
    slot: 'slot1.list1',
    layout: {
      0: ['mostread'],
      1: ['mostread'],
      2: ['mostread', 'mostread'],
      3: ['mostread', 'mostread', 'mostread'],
      4: ['mostread', 'mostread', 'mostread', 'mostread']
    }
  },
  slotCenter: {
    slot: 'slot2.list1',
    layout: {
      0: ['mostread'],
      1: ['mostread'],
      2: ['mostread', 'mostread'],
      3: ['mostread', 'mostread', 'mostread'],
      4: ['mostread', 'mostread', 'mostread', 'mostread']
    }
  },
  slotRight: {
    slot: 'slot3.list1',
    layout: {
      0: ['mostread'],
      1: ['mostread'],
      2: ['mostread', 'mostread'],
      3: ['mostread', 'mostread', 'mostread'],
      4: ['mostread', 'mostread', 'mostread', 'mostread']
    }
  }
}