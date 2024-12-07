<template>
    <button>
        <i class="fas fa-chevron-up"></i>
    </button>
</template>

<style lang="scss" scoped>
button {
    position: fixed;
    
    bottom: 0;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    background: var(--color-4);
    color: var(--color-2);
    width: 50px;
    height: 50px;
    i {
        font-size: var(--size-18);
    }
}
</style>
