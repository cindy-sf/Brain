import { shallowMount } from '@vue/test-utils';
import cutFace from '@/components/cutFace/index.vue'

describe('cutFace.vue', () => {
  const wrapper = shallowMount(cutFace)
  const title = wrapper.find('h1');
 expect(title.text()).toContain('test');
});