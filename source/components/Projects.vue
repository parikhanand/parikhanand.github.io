<template>
  <section id="work" class="py-12">
    <h2 class="text-center text-3xl md:text-5xl mb-12 font-medium mt-10">
      My Work
    </h2>

    <!-- <div class="flex flex-wrap justify-center my-10 mx-10">
      <tab-button
        v-for="tech in technologies"
        :key="tech"
        :is-active="tech == active"
        :title="tech"
        @click.native="techChange(tech)"
      />
    </div> -->

    <div
      class="container mx-auto md:flex justify-center md:px-10 lg:px-20 mb-10"
    >
      <div class="w-full h-full flex flex-wrap lg:-mx-4">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="w-full md:w-1/2 lg:w-1/3 p-4 h-full"
          data-aos="fade-up"
        >
          <div class="bg-white rounded-md p-4 shadow-sm">
            <!-- <img
              class="w-full object-cover rounded-md mt-4"
              style="max-height: 300px; aspect-ratio: 16/10"
              :src="project.image"
              alt=""
            /> -->

            <div>
              <h3 class="font-medium text-lg mb-2">{{ project.title }}</h3>
              <p class="text-sm">
                {{ project.description }}
              </p>
              <div class="flex mt-1">
                <div
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="bg-blue-100 rounded-md px-2 py-1 text-blue-500 text-sm mt-2 mr-2 capitalize"
                >
                  {{ tech }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import TabButton from './home/TabButton.vue'

export default {
  ssr: false,
  // components: { TabButton },
  data: () => {
    return {
      active: 'all',
      technologies: ['react', 'vue', 'flutter', 'laravel', 'node', 'all'],
      projects: [],
      allProjects: [
        {
          title: 'My Hauiler',
          description:
            'My hauler service is designed for transport-related jobs, managing job statuses, and includes real-time chat functionality for better tracking of job progress.',
          image:
            'https://i.picsum.photos/id/912/500/500.jpg?hmac=usaNwSoto8KFh0Td59s9FhTxFpzqsoTfvGAK50ZzMBc',
          technologies: ['laravel', 'nuxt', 'socket.io'],
        },
        {
          title: 'Loyalty',
          description:
            'Loyalty manages multiple applications with the same backend and is also connected to third-party services. It handles various types of offers.',
          image:
            'https://i.picsum.photos/id/912/500/500.jpg?hmac=usaNwSoto8KFh0Td59s9FhTxFpzqsoTfvGAK50ZzMBc',
          technologies: ['laravel'],
        },
        {
          title: 'Culture Club',
          description:
            'Implemented an entire platform for productivity and project management domain which has real-time update capabilities.',
          image:
            'https://i.picsum.photos/id/912/500/500.jpg?hmac=usaNwSoto8KFh0Td59s9FhTxFpzqsoTfvGAK50ZzMBc',
          technologies: ['laravel', 'socket.io', 'redis'],
        },
        {
          title: 'Leavingcert Plus',
          description:
            'Leavingcert plus is provide eduction realted data like provide video tutorial, audio tutorial,create quiz for the student, etc....',
          image:
            'https://i.picsum.photos/id/912/500/500.jpg?hmac=usaNwSoto8KFh0Td59s9FhTxFpzqsoTfvGAK50ZzMBc',
          technologies: ['laravel', 'vue'],
        },
        {
          title: 'Educastic',
          description:
            'Create a virtual room, invite students for real-time interactive learning on the whiteboard, and enable video call functionality.',
          image:
            'https://i.picsum.photos/id/912/500/500.jpg?hmac=usaNwSoto8KFh0Td59s9FhTxFpzqsoTfvGAK50ZzMBc',
          technologies: ['laravel', 'react'],
        },
      ],
    }
  },
  created() {
    this.projects = this.allProjects
  },
  methods: {
    techChange(tech) {
      this.active = tech

      if (tech === 'all') {
        this.projects = this.allProjects
      } else {
        this.projects = this.allProjects.filter(
          (project) => project.technologies.findIndex((t) => t === tech) !== -1
        )
      }
    },
  },
}
</script>
