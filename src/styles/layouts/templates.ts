export interface TemplateProps {
  box: Object;
  box_wrap: Object;
  carousel?: Object;
  datetime_enabled: boolean;
  image: Object;
  title: Object;
  section?: Object;
  subject: Object;
  subtitle: Object;
}

export const TEMPLATES_FEATURED = {
  slot100: {
    slot: 'slot1.list1'
  }
}

export const TEMPLATES_DEFAULT = {
  slot100: {
    slot: 'slot1.list1',
    layout: {
      0: ['image_large_left'],
      1: ['image_large_left'],
      2: ['image_large_left', 'related'],
      3: ['image_two', 'image_two', 'mostread'],
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