import { mount } from "@vue/test-utils";
import Nav from '@/components/Nav.vue';

/*
The /profile link should be shown.
When the user is an admin, the /admin link should be shown.
When the user is not an admin, the /admin link should not be shown.
Check for visibility to dropdown
*/

test('renders a profile link', () => {
    const wrapper = mount(Nav);

    const profileLink = wrapper.get('#profile');
    
    //Here we are implicitly asserting that the element #profile exists.
    expect(profileLink.text()).toEqual('My Profile');

    
});

test('does not render a admin link', () => {
    const wrapper = mount(Nav);

    // Using `wrapper.get` would throw and make the test fail.
    expect(wrapper.find('#admin').exists()).toBe(false);
});

test('renders an admin link', () => {
    const wrapper = mount(Nav, {
        data(){
            return{
                admin: true
            }
        }
    });
    // Again, by using `get()` we are implicitly asserting that the element exists.
    expect(wrapper.get('#admin').text()).toEqual('Admin');
});

test('does not show the user dropdown', () => {
    const wrapper = mount(Nav);

    expect(wrapper.get('#user-dropdown').isVisible()).toBe(false);
});