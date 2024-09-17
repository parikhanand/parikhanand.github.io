<script lang="ts">
    import laravel from '$lib/assets/images/skills/laravel.svg';
    import vuejs from '$lib/assets/images/skills/vuejs.svg';
    import nuxtjs from '$lib/assets/images/skills/nuxtjs.svg';
    import redis from '$lib/assets/images/skills/redis.svg';
    import reactjs from '$lib/assets/images/skills/reactjs.svg';
    import socketio from '$lib/assets/images/skills/socketio.svg';
    import cultureclubImg from '$lib/assets/images/projects/cultureclub-logo.webp';
    import leavingcertImg from '$lib/assets/images/projects/leavingcert-logo.webp';
    import hauilerImg from '$lib/assets/images/projects/hauiler-logo-black.webp';
    import educasticImg from '$lib/assets/images/projects/educastic-logo.webp';
    import loyaltyImg from '$lib/assets/images/projects/loyalty.webp';
    import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';

    // Components
    import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

    // Local
    let showcase = 'My Hauiler';
</script>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-10 items-start">
    <!-- Preview -->
    <div class="col-span-2">
        <DocsPreview label={showcase.replace('-', ' ')} regionPreview="min-h-[400px]">
            <svelte:fragment slot="preview">
                {#if showcase === 'My Hauiler'}
                    <div class="card shadow-xl overflow-hidden max-w-[400px] text-token">
                        <header>
                            <img
                                src={hauilerImg}
                                class="bg-black/50 w-full h-1/2 aspect-[21/9] object-cover"
                                alt="My Hauiler"
                                loading="lazy"
                            />
                        </header>
                        <div class="p-4 space-y-4">
                            <p class="h6 font-bold">Logistics</p>
                            <h3 class="h3">My Hauiler</h3>
                            <article>
                                <p class="opacity-75">
                                    My Hauiler service is designed for transport-related jobs,
                                    managing job statuses, and includes real-time chat functionality
                                    for better tracking of job progress.
                                </p>
                            </article>
                        </div>
                        <hr class="opacity-50" />
                        <footer class="p-4 flex justify-center items-center space-x-4">
                            <div class="flex justify-center space-x-2">
                                <div class="group chip variant-soft hover:variant-filled">
                                    <img
                                        src={laravel}
                                        class="w-[18px] h-[18px]"
                                        alt="Skills"
                                        loading="lazy"
                                    />
                                    <span>Laravel</span>
                                </div>
                                <div class="group chip variant-soft hover:variant-filled">
                                    <img
                                        src={nuxtjs}
                                        class="w-[18px] h-[18px]"
                                        alt="Skills"
                                        loading="lazy"
                                    />
                                    <span>NuxtJs</span>
                                </div>
                                <div class="group chip variant-soft hover:variant-filled">
                                    <img
                                        src={socketio}
                                        class="w-[18px] h-[18px]"
                                        alt="Skills"
                                        loading="lazy"
                                    />
                                    <span>Socket.io</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                {:else if showcase === 'Loyalty'}
                    <div class="card shadow-xl overflow-hidden max-w-[400px] text-token">
                        <header>
                            <img
                                src={loyaltyImg}
                                class="bg-black/50 w-full h-1/2 aspect-[21/9] object-cover"
                                alt="Loyalty"
                                loading="lazy"
                            />
                        </header>
                        <div class="p-4 space-y-4">
                            <p class="h6 font-bold">Food</p>
                            <h3 class="h3">Loyalty</h3>
                            <article>
                                <p class="opacity-75">
                                    Loyalty manages multiple applications with the same backend and
                                    is also connected to third-party services. It handles various
                                    types of offers.
                                </p>
                            </article>
                        </div>
                        <hr class="opacity-50" />
                        <footer class="p-4 flex justify-center items-center space-x-4">
                            <div class="flex justify-center space-x-2">
                                <div class="group chip variant-soft hover:variant-filled">
                                    <img
                                        src={laravel}
                                        class="w-[18px] h-[18px]"
                                        alt="Skills"
                                        loading="lazy"
                                    />
                                    <span>Laravel</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                {:else if showcase === 'Culture Club'}
                    <div class="card shadow-xl overflow-hidden max-w-[400px] text-token">
                        <header>
                            <img
                                src={cultureclubImg}
                                class="bg-black/50 w-full h-1/2 aspect-[21/9] object-cover"
                                alt="Culture Club"
                                loading="lazy"
                            />
                        </header>
                        <div class="p-4 space-y-4">
                            <p class="h6 font-bold">Productivity</p>
                            <h3 class="h3">Culture Club</h3>
                            <article>
                                <p class="opacity-75">
                                    Implemented an entire platform for productivity and project
                                    management domain which has real-time update capabilities.
                                </p>
                            </article>
                        </div>
                        <hr class="opacity-50" />
                        <footer class="p-4 flex justify-center items-center space-x-4">
                            <div class="flex justify-center space-x-2">
                                <div class="group chip variant-soft hover:variant-filled">
                                    <img
                                        src={laravel}
                                        class="w-[18px] h-[18px]"
                                        alt="Skills"
                                        loading="lazy"
                                    />
                                    <span>Laravel</span>
                                </div>
                                <div class="group chip variant-soft hover:variant-filled">
                                    <img
                                        src={socketio}
                                        class="w-[18px] h-[18px]"
                                        alt="Skills"
                                        loading="lazy"
                                    />
                                    <span>Socket.io</span>
                                </div>
                                <div class="group chip variant-soft hover:variant-filled">
                                    <img
                                        src={redis}
                                        class="w-[18px] h-[18px]"
                                        alt="Skills"
                                        loading="lazy"
                                    />
                                    <span>Redis</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                {:else if showcase === 'Leavingcert Plus'}
                    <div class="card shadow-xl overflow-hidden max-w-[400px] text-token">
                        <header>
                            <img
                                src={leavingcertImg}
                                class="bg-black/50 w-full h-1/2 aspect-[21/9] object-cover"
                                alt="Leavingcert Plus"
                                loading="lazy"
                            />
                        </header>
                        <div class="p-4 space-y-4">
                            <p class="h6 font-bold">Education</p>
                            <h3 class="h3">Leavingcert Plus</h3>
                            <article>
                                <p class="opacity-75">
                                    Leavingcert plus provides education related data like video and
                                    audio tutorials, interactive quizzes for the student and much
                                    more.
                                </p>
                            </article>
                        </div>
                        <hr class="opacity-50" />
                        <footer class="p-4 flex justify-center items-center space-x-4">
                            <div class="flex justify-center space-x-2">
                                <div class="group chip variant-soft hover:variant-filled">
                                    <img
                                        src={laravel}
                                        class="w-[18px] h-[18px]"
                                        alt="Skills"
                                        loading="lazy"
                                    />
                                    <span>Laravel</span>
                                </div>
                                <div class="group chip variant-soft hover:variant-filled">
                                    <img
                                        src={vuejs}
                                        class="w-[18px] h-[18px]"
                                        alt="Skills"
                                        loading="lazy"
                                    />
                                    <span>VueJs</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                {:else if showcase === 'Educastic'}
                    <div class="card shadow-xl overflow-hidden max-w-[400px] text-token">
                        <header>
                            <img
                                src={educasticImg}
                                class="bg-black/50 w-full h-1/2 aspect-[21/9] object-cover"
                                alt="Educastic"
                                loading="lazy"
                            />
                        </header>
                        <div class="p-4 space-y-4">
                            <p class="h6 font-bold">Education</p>
                            <h3 class="h3">Educastic</h3>
                            <article>
                                <p class="opacity-75">
                                    Create a virtual room, invite students for real-time interactive
                                    learning on the whiteboard, and enable video call functionality.
                                </p>
                            </article>
                        </div>
                        <hr class="opacity-50" />
                        <footer class="p-4 flex justify-center items-center space-x-4">
                            <div class="flex justify-center space-x-2">
                                <div class="group chip variant-soft hover:variant-filled">
                                    <img
                                        src={laravel}
                                        class="w-[18px] h-[18px]"
                                        alt="Skills"
                                        loading="lazy"
                                    />
                                    <span>Laravel</span>
                                </div>
                                <div class="group chip variant-soft hover:variant-filled">
                                    <img
                                        src={reactjs}
                                        class="w-[18px] h-[18px]"
                                        alt="Skills"
                                        loading="lazy"
                                    />
                                    <span>ReactJs</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                {/if}
            </svelte:fragment>
        </DocsPreview>
    </div>
    <!-- Info -->
    <div class="space-y-4" id="My_Projects">
        <h2 class="h2">My Projects!</h2>
        <p>Some of the projects which I have developed during my professional tenure.</p>
        <!-- Options -->
        <ListBox
            active="variant-filled"
            hover="hover:variant-soft"
            rounded="rounded-container-token"
            padding="!p-4"
            labelledby="My_Projects"
        >
            <ListBoxItem bind:group={showcase} name="showcase" value="My Hauiler">
                <div class="space-y-2">
                    <h3 class="h3">My Hauiler</h3>
                </div>
            </ListBoxItem>
            <ListBoxItem bind:group={showcase} name="showcase" value="Loyalty">
                <div class="space-y-2">
                    <h3 class="h3">Loyalty</h3>
                </div>
            </ListBoxItem>
            <ListBoxItem bind:group={showcase} name="showcase" value="Culture Club">
                <div class="space-y-2">
                    <h3 class="h3">Culture Club</h3>
                </div>
            </ListBoxItem>
            <ListBoxItem bind:group={showcase} name="showcase" value="Leavingcert Plus">
                <div class="space-y-2">
                    <h3 class="h3">Leavingcert Plus</h3>
                </div>
            </ListBoxItem>
            <ListBoxItem bind:group={showcase} name="showcase" value="Educastic">
                <div class="space-y-2">
                    <h3 class="h3">Educastic</h3>
                </div>
            </ListBoxItem>
        </ListBox>
    </div>
</div>
