<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-40 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel
              class="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800"
            >
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                <div class="flex flex-shrink-0 items-center px-4">
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <nav class="mt-5 space-y-1 px-2">
                  <a
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    :class="[
                      item.name == currentTab
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'group flex items-center rounded-md px-2 py-2 text-base font-medium',
                    ]"
                    @click="() => (currentTab = item.name)"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        item.name == currentTab
                          ? 'text-gray-300'
                          : 'text-gray-400 group-hover:text-gray-300',
                        'mr-4 h-6 w-6 flex-shrink-0',
                      ]"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </a>
                </nav>
              </div>
              <div class="flex flex-shrink-0 bg-gray-700 p-4">
                <a href="#" class="group block flex-shrink-0">
                  <div class="flex items-center">
                    <div>
                      <img
                        class="inline-block h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div class="ml-3">
                      <p class="text-base font-medium text-white">Tom Cook</p>
                      <p
                        class="text-sm font-medium text-gray-400 group-hover:text-gray-300"
                      >
                        View profile
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </DialogPanel>
          </TransitionChild>
          <div class="w-14 flex-shrink-0">
            <!-- Force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex min-h-0 flex-1 flex-col bg-gray-800">
        <div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <div class="flex flex-shrink-0 items-center px-4">
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>
          <nav class="mt-5 flex-1 space-y-1 px-2">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :class="[
                item.name == currentTab
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'group flex items-center rounded-md px-2 py-2 text-sm font-medium',
              ]"
              @click="() => (currentTab = item.name)"
            >
              <component
                :is="item.icon"
                :class="[
                  item.name == currentTab
                    ? 'text-gray-300'
                    : 'text-gray-400 group-hover:text-gray-300',
                  'mr-3 h-6 w-6 flex-shrink-0',
                ]"
                aria-hidden="true"
              />
              {{ item.name }}
            </a>
          </nav>
        </div>
        <div class="flex flex-shrink-0 bg-gray-700 p-4">
          <a href="#" class="group block w-full flex-shrink-0">
            <div class="flex items-center">
              <div>
                <img
                  class="inline-block h-9 w-9 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-white">Tom Cook</p>
                <p
                  class="text-xs font-medium text-gray-300 group-hover:text-gray-200"
                >
                  View profile
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="flex flex-1 flex-col lg:pl-64">
      <div
        class="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 lg:hidden"
      >
        <button
          type="button"
          class="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <main class="flex-1">
        <div class="py-6">
          <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">
              {{ currentTab }}
            </h1>
          </div>
          <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <PDFComponent
              v-if="currentTab == 'Documents'"
              :response="response"
            />
            <div v-else class="flex flex-col gap-6">
              <div v-for="field in response.basicInfo" :key="field.label">
                <FormInputText
                  v-if="field.inputType == InputType.TEXT"
                  :label="field.label"
                  :format="field.format"
                  :field="field"
                  v-model="field.value"
                />
                <FormInputCheckbox
                  v-if="field.inputType == InputType.CHECKBOX"
                  :label="field.label"
                  v-model="field.value"
                />
              </div>
              <input type="number" />
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3Icon,
  InboxIcon,
  IdentificationIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import FormInputText from "./FormInputText.vue";
import FormInputCheckbox from "./FormInputCheckbox.vue";
import { FullRecord, InputType } from "@/types";
import PDFComponent from "./PDFComponent.vue";

const currentTab = ref("Basic Info");
const sidebarOpen = ref(false);

const navigation = [
  { name: "Basic Info", href: "#", icon: IdentificationIcon },
  { name: "Documents", href: "#", icon: InboxIcon },
];

let response: FullRecord = {
  basicInfo: {
    firstName: {
      inputType: InputType.TEXT,
      label: "First Name",
      value: "",
      format: (v: string) => v.toUpperCase(),
    },
    middleInitial: {
      inputType: InputType.TEXT,
      label: "Middle Initial",
      value: "",
      format: (v: string) => v.toUpperCase(),
      maxlen: 1,
    },
    lastName: {
      inputType: InputType.TEXT,
      label: "Last Name",
      value: "",
      format: (v: string) => v.toUpperCase(),
    },
    ssn: {
      inputType: InputType.TEXT,
      label: "SSN",
      value: "",
      format: formatssn,
      maxlen: 9,
    },
    address: {
      inputType: InputType.TEXT,
      label: "Address",
      value: "",
      format: (v: string) => v.toUpperCase(),
    },
    aptNo: {
      inputType: InputType.TEXT,
      label: "Apartment",
      value: "",
      format: (v: string) => v.toUpperCase(),
    },
    city: {
      inputType: InputType.TEXT,
      label: "City",
      value: "",
      format: (v: string) => v.toUpperCase(),
    },
    state: {
      inputType: InputType.TEXT,
      label: "State",
      value: "",
      format: (v: string) => v.toUpperCase(),
    },
    zipcode: {
      inputType: InputType.TEXT,
      label: "Zipcode",
      value: "",
      format: (v: string) => v.toUpperCase(),
    },
    digitalAssets: {
      inputType: InputType.CHECKBOX,
      label: "Digital Assets",
      value: false,
    },
  },
  w2s: [],
};

function formatssn(s: string): string {
  return s
    .replace(/[^0-9]/g, "")
    .replace(/^(\d{3})(\d{2})(\d{4})/g, "$1-$2-$3");
}
</script>
