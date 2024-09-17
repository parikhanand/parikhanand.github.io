<script lang="ts">
    import profileImg from '$lib/assets/images/profile.webp';
    import { Avatar, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<!-- variant-ringed-error -->
<div class="aspect-video relative">
    <!-- Avatar -->
    <div class="anim-float-avatar absolute z-[1] top-[32%] left-[40%]">
        <Avatar src={profileImg} width="w-32" shadow="shadow-xl" alt="Profile Photo" />
    </div>
    <!-- Progress Radial -->
    <div class="anim-float-progress anim-delay-200 absolute z-[1] top-[6%] left-[13%]">
        <button class="card btn variant-glass-secondary p-4 cursor-pointer" title="Database">
            <!-- Database icon -->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="3.75em"
                viewBox="0 0 448 512"
                class="leading-4"
            >
                <path
                    class="fill-black dark:fill-white"
                    d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"
                />
            </svg>
        </button>
    </div>
    <!-- Search Input -->
    <div class="anim-float-search anim-delay-200 absolute z-[1] top-[-12%] left-[35%]">
        <button class="btn variant-glass-secondary">
            <span>Cloud Development</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
                <path
                    class="fill-black dark:fill-white"
                    d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"
                />
            </svg>
        </button>
    </div>
    <!-- Radio Group -->
    <div class="anim-float-radio absolute z-[1] top-[20%] left-[70%]">
        <button class="btn variant-glass-secondary">
            <span>Backend</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path
                    class="fill-black dark:fill-white"
                    d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
                />
            </svg>
        </button>
    </div>
    <!-- Card -->
    <div class="anim-float-card absolute z-[1] top-[65%] left-[65%]">
        <button
            class="card btn variant-glass-secondary p-4 cursor-pointer"
            title="Machine learning"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="3.75em"
                viewBox="0 0 640 512"
                class="leading-4"
            >
                <path
                    class="fill-black dark:fill-white"
                    d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"
                />
            </svg>
        </button>
    </div>
    <!-- LightSwitch -->
    <div class="anim-float-light-switch anim-delay-200 absolute z-[1] top-[98%] left-[45%]">
        <LightSwitch />
    </div>
    <!-- Button -->
    <div class="anim-float-button absolute z-[1] top-[78%] left-[15%]">
        <button class="btn variant-glass-secondary">
            <span>Frontend</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                <path
                    class="fill-black dark:fill-white"
                    d="M183.1 235.3c33.7 20.7 62.9 48.1 85.8 80.5c7 9.9 13.4 20.3 19.1 31c5.7-10.8 12.1-21.1 19.1-31c22.9-32.4 52.1-59.8 85.8-80.5C437.6 207.8 490.1 192 546 192h9.9c11.1 0 20.1 9 20.1 20.1C576 360.1 456.1 480 308.1 480H288 267.9C119.9 480 0 360.1 0 212.1C0 201 9 192 20.1 192H30c55.9 0 108.4 15.8 153.1 43.3zM301.5 37.6c15.7 16.9 61.1 71.8 84.4 164.6c-38 21.6-71.4 50.8-97.9 85.6c-26.5-34.8-59.9-63.9-97.9-85.6c23.2-92.8 68.6-147.7 84.4-164.6C278 33.9 282.9 32 288 32s10 1.9 13.5 5.6z"
                />
            </svg>
        </button>
    </div>
    <!-- BG Circles -->
    <div class="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-0">
        <div
            class="w-96 aspect-square border-2 border-black/5 dark:border-white/5 rounded-full flex justify-center items-center"
        >
            <div
                class="w-[240px] aspect-square border-2 border-black/5 dark:border-white/5 rounded-full flex justify-center items-center"
            />
        </div>
    </div>
</div>

<style lang="postcss">
    .anim-float-avatar {
        animation: float-up 13s ease-in-out infinite;
    }
    .anim-float-progress {
        animation: float-down 15s ease-in-out infinite;
    }
    .anim-float-search {
        animation: float-up 14s ease-in-out infinite;
        animation-delay: 3s;
    }
    .anim-float-radio {
        animation: float-down 17s ease-in-out infinite;
    }
    .anim-float-card {
        animation: float-up 12s ease-in-out infinite;
    }
    .anim-float-light-switch {
        animation: float-down 18s ease-in-out infinite;
        animation-delay: 2s;
    }
    .anim-float-button {
        animation: float-up 15s ease-in-out infinite;
    }
    @keyframes float-up {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-20px);
        }
        100% {
            transform: translateY(0px);
        }
    }
    /*  */
    @keyframes float-down {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(20px);
        }
        100% {
            transform: translateY(0px);
        }
    }
</style>
