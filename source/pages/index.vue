<template>
  <div>
    <div
      ref="loader"
      class="fixed h-full w-full z-50 bg-white flex items-center justify-center opacity-1 transition-opacity duration-1000"
    >
      <svg
        class="animate-spin -ml-1 mr-3 h-10 w-10 text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>

    <div class="h-screen bg-white" style="min-height: 700px">
      <div class="container md:flex px-6 lg:px-20 mx-auto h-full">
        <div
          class="flex flex-col-reverse lg:flex-row justify-end -mx-5 lg:-mr-20 lx:-mr-5 h-full lg:items-center"
        >
          <div class="px-5 lg:w-8/12 xl:w-7/12">
            <div class="w-full flex justify-center flex-col h-full">
              <h1
                class="text-2xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl mb-6 font-light text-gray-600 hero-text leading-normal sm:leading-normal lg:leading-normal md:leading-normal"
              >
                Hello, I am <strong class="font-medium">Anand</strong>, <br />
                a
                <strong class="text-gray-800 font-medium">
                  Full Stack Developer
                </strong>
              </h1>

              <div class="mt-4">
                <a
                  href="#work"
                  class="bg-blue-600 text-white rounded-md shadow-sm px-6 py-3 text-sm sm:text-base"
                >
                  View My Work
                </a>
              </div>
              <div class="flex rounded-lg mt-12 md:mt-16"></div>
            </div>
          </div>

          <div
            class="px-5 md:w-8/12 lg:w-4/12 xl:w-5/12 flex justify-center items-center pt-28 sm:pt-20 lg:pt-0"
          >
            <div>
              <lottie-player
                src="https://assets1.lottiefiles.com/packages/lf20_w51pcehl.json"
                mode="bounce"
                background="transparent"
                speed="1"
                style="width: 100%; height: auto"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Projects />

    <SkillsAndExperience />
    <Experience />

    <footer
      class="bg-white w-full bg-back px-4 md:px-10 py-5 flex justify-center"
    >
      <a
        target="_blank"
        href="https://www.linkedin.com/in/anand-parikh-513a85a0"
        class="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center social-media-link mr-2 rounded-lg bg-white"
      >
        <LinkedIn class="social-icon h-6 w-6 md:h-8 md:w-8" />
      </a>
      <a
        target="_blank"
        href="https://github.com/parikhanand"
        class="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center social-media-link mr-2 rounded-lg bg-white"
      >
        <Github class="social-icon h-6 w-6 md:h-8 md:w-8" />
      </a>
      <a
        href="mailto:parikhanand9898@gmail.com"
        class="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center social-media-link mr-2 rounded-lg bg-white"
      >
        <Mail class="social-icon h-6 w-6 md:h-8 md:w-8" />
      </a>
    </footer>
  </div>
</template>

<script>
import AOS from 'aos'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import LinkedIn from '~/components/social-icons/LinkedIn'
// import Twitter from '~/components/social-icons/Twitter'
import Github from '~/components/social-icons/Github'
import Mail from '~/components/social-icons/Mail'
import Projects from '~/components/Projects.vue'
import SkillsAndExperience from '~/components/SkillsAndExperience.vue'
import Experience from '~/components/Experience.vue'

export default {
  components: {
    LinkedIn,
    // Twitter,
    Github,
    Mail,
    Projects,
    SkillsAndExperience,
    Experience,
  },
  mounted() {
    AOS.init({ once: true })

    setTimeout(() => {
      this.$refs.loader.style.opacity = 0
      setTimeout(() => {
        this.$refs.loader.remove()
      }, 1000)
    }, 1000)

    const firebaseConfig = {
      apiKey: 'AIzaSyDWAL61wQPqTTOdYPjymuc6DK0M9wc5waI',
      authDomain: 'portfolio-3807c.firebaseapp.com',
      projectId: 'portfolio-3807c',
      storageBucket: 'portfolio-3807c.appspot.com',
      messagingSenderId: '751624149468',
      appId: '1:751624149468:web:fc519734c030c0dd295719',
      measurementId: 'G-Q8P4R9MERP',
    }

    // Initialize Firebase
    const app = initializeApp(firebaseConfig)
    // eslint-disable-next-line no-unused-vars
    const analytics = getAnalytics(app)
  },
}
</script>

<style lang="css">
html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  font-family: 'Poppins', sans-serif;
}
.social-media-link {
  margin: 10px;
}
.social-icon {
  fill: rgba(37, 99, 235, 1);
}
.hero-text {
  line-height: 1.4 !important;
  /* font-size: 72px; */
  /* background: -webkit-linear-gradient(45deg, #fc466b, #3f5efb); */
  background: -webkit-linear-gradient(45deg, #2b32b2, #1488cc);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
