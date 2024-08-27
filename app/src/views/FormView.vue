<script lang="ts">
import TodoCard from '@/components/TodoCard.vue';
type Form = {
  task: string;
  description: string;
  status: string;
};
export default {
  data() {
    return {
      form: {
        task: "",
        description: "",
        status: "",
      } as Form,
      todo: [] as Form[],
    };
  },
  components: {
    TodoCard,
  },
  methods: {
    async handleOnSubmit() {

      this.$emit("submit", this.form);
      if (this.form.task === "" || this.form.description === "" || this.form.status === "") {
        return;
      }
      this.todo.push({ ...this.form });
      this.form = {
        task: "",
        description: "",
        status: "",
      };
    },
  },
};
</script>

<template>
  <div>
    <form @submit.prevent="handleOnSubmit">
      <div>
        <label for="task">Task</label>
        <input type="text" id="task" v-model="form.task" />
      </div>
      <div>
        <label for="description">Description</label>
        <input type="text" id="description" v-model="form.description" />
      </div>
      <div>
        <label for="status">Status</label>
        <input type="text" id="status" v-model="form.status" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
  <div>
    <ul>
      <TodoCard
        v-for="item in todo"
        :key="item.task"
        :title="item.task"
        :description="item.description"
        :status="item.status"
      />
    </ul>
  </div>
</template>
