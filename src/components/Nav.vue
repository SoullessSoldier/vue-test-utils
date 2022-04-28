<template>
    <nav>
        <a href="/profile" id="profile">My Profile</a>
        <a v-if="admin" href="/admin" id="admin">Admin</a>
        <ul v-show="shouldShowDropdown" id="user-dropdown">
            <!-- content -->
        </ul>
    </nav>
</template>
<script>
export default {
    data(){
        return{
            admin: false,
            shouldShowDropdown: false
        }
    }
}
</script>