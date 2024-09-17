<script lang="ts">
    import imperoImg from '$lib/assets/images/company/impero_logo.webp';
    import brainvireImg from '$lib/assets/images/company/brainvire.webp';
    import trootechImg from '$lib/assets/images/company/trootech-logo.webp';
    import { TabGroup, Tab } from '@skeletonlabs/skeleton';

    type Theme = {
        base: string;
        header: string;
        src: string;
        img: string;
        text1: string;
        text1_content: string;
        text2: string;
        text2_content: string;
        text3: string;
        text3_content: string;
        progressTrack: string;
        progressMeter: string;
        footer: string;
        button: string;
    };

    // Local
    let theme = 'simple';
    const themeStyles: Record<string, Theme> = {
        simple: {
            base: 'variant-soft-primary font-sans rounded-container-token',
            header: 'bg-primary-500 p-4 grid grid-cols-3 gap-8 items-center rounded-tl-container-token rounded-tr-container-token rounded-bl-container-token rounded-br-container-token',
            src: imperoImg,
            img: 'bg-white w-full aspect-square rounded-0 -translate-x-0 -translate-y-0 sm:rounded-3xl scale-110 sm:-translate-x-4 sm:-translate-y-4 transition-transform',
            text1: 'text-on-primary-token text-lg',
            text1_content: 'Jan 2022 - Present',
            text2: 'text-on-primary-token font-bold text-xl sm:text-3xl',
            text2_content: 'Sr. PHP Developer',
            text3: 'text-on-primary-token text-lg sm:text-2xl',
            text3_content: 'Impero IT Services Pvt. Ltd.',
            progressTrack: 'bg-primary-400',
            progressMeter: 'bg-white',
            footer: 'p-10 grid grid-cols-5 gap-10 place-items-center rounded-tl-3xl rounded-tr-3xl',
            button: 'btn-icon'
        },
        elegant: {
            base: 'variant-soft-primary font-sans rounded-container-token',
            header: 'bg-primary-500 p-4 grid grid-cols-3 gap-8 items-center rounded-tl-container-token rounded-tr-container-token rounded-bl-container-token rounded-br-container-token',
            src: brainvireImg,
            img: 'bg-white w-full aspect-square rounded-0 -translate-x-0 -translate-y-0 sm:rounded-3xl scale-110 sm:-translate-x-4 sm:-translate-y-4 transition-transform',
            text1: 'text-on-primary-token text-lg',
            text1_content: 'May 2021 - January 2022',
            text2: 'text-on-primary-token font-bold text-xl sm:text-3xl',
            text2_content: 'SDE',
            text3: 'text-on-primary-token text-lg sm:text-2xl',
            text3_content: 'Brainvire Infotech Inc.',
            progressTrack: 'bg-black/5',
            progressMeter: 'bg-black',
            footer: 'p-10 grid grid-cols-5 gap-10 place-items-center',
            button: 'btn-icon rounded-none text-black ring-[1px] ring-black/5'
        },
        playful: {
            base: 'variant-soft-primary font-sans rounded-container-token',
            header: 'bg-primary-500 p-4 grid grid-cols-3 gap-8 items-center rounded-tl-container-token rounded-tr-container-token rounded-bl-container-token rounded-br-container-token',
            src: trootechImg,
            img: 'bg-white w-full aspect-square rounded-0 -translate-x-0 -translate-y-0 sm:rounded-3xl scale-110 sm:-translate-x-4 sm:-translate-y-4 transition-transform',
            text1: 'text-on-primary-token text-lg',
            text1_content: 'June 2018 - May 2021',
            text2: 'text-on-primary-token font-bold text-xl sm:text-3xl',
            text2_content: 'PHP Developer',
            text3: 'text-on-primary-token text-lg sm:text-2xl',
            text3_content: 'TRooTech Business Solutions Pvt. Ltd.',
            progressTrack: 'bg-black/5',
            progressMeter: 'bg-white',
            footer: 'p-10 grid grid-cols-5 gap-10 place-items-center rounded-tl-3xl rounded-tr-3xl',
            button: 'btn-icon bg-amber-300 text-blue-900'
        }
    };
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10 items-center">
    <!-- Info -->
    <div class="space-y-4 md:space-y-10">
        <div class="max-w-[640px] mx-auto space-y-4">
            <h2 class="h2">Professional Experience</h2>

            <p>I have been developing in a professional enviornment since 2018.</p>
        </div>
        <!-- Tabs -->
        <TabGroup
            active="variant-filled fill-white dark:fill-black"
            hover="hover:variant-soft"
            flex="flex-1 lg:flex-none"
            rounded="rounded-container-token"
            border=""
            regionList="space-x-1"
            padding="p-2 sm:p-4"
            class="max-w-[640px] mx-auto fill-base-token dark:fill-white"
        >
            <Tab bind:group={theme} name="theme" value="simple" class="space-y-4 w-24">
                <div class="flex flex-col items-center justify-center gap-3">
                    <svg
                        class="text-2xl"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                    >
                        <path
                            d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"
                        />
                    </svg>
                    <span>ImperoIT</span>
                </div>
            </Tab>
            <Tab bind:group={theme} name="theme" value="elegant" class="space-y-4 w-24">
                <div class="flex flex-col items-center justify-center gap-3">
                    <svg
                        class="text-2xl"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                    >
                        <path
                            d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.3-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z"
                        />
                    </svg>
                    <span>Brainvire</span>
                </div>
            </Tab>
            <Tab bind:group={theme} name="theme" value="playful" class="space-y-4 w-24">
                <div class="flex flex-col items-center justify-center gap-3">
                    <svg
                        class="text-2xl"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                    >
                        <path
                            d="M315.4 15.5C309.7 5.9 299.2 0 288 0s-21.7 5.9-27.4 15.5l-96 160c-5.9 9.9-6.1 22.2-.4 32.2s16.3 16.2 27.8 16.2H384c11.5 0 22.2-6.2 27.8-16.2s5.5-22.3-.4-32.2l-96-160zM288 312V456c0 22.1 17.9 40 40 40H472c22.1 0 40-17.9 40-40V312c0-22.1-17.9-40-40-40H328c-22.1 0-40 17.9-40 40zM128 512a128 128 0 1 0 0-256 128 128 0 1 0 0 256z"
                        />
                    </svg>
                    <span>TRooTech</span>
                </div>
            </Tab>
        </TabGroup>
    </div>
    <!-- Card -->
    <div>
        <div
            class="max-w-[640px] mx-auto transition ease-in-out duration-200 {themeStyles[theme]
                .base}"
        >
            <header class={themeStyles[theme].header}>
                <img
                    src={themeStyles[theme].src}
                    class={themeStyles[theme].img}
                    alt="Companies"
                    loading="lazy"
                />
                <div class="col-span-2 space-y-2">
                    <div class={themeStyles[theme].text2}>
                        {themeStyles[theme].text2_content}
                    </div>
                    <div class={themeStyles[theme].text3}>
                        {themeStyles[theme].text3_content}
                    </div>
                    <div class={themeStyles[theme].text1}>
                        {themeStyles[theme].text1_content}
                    </div>
                </div>
            </header>
        </div>
    </div>
</div>
