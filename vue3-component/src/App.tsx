import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import YInput from '@/components/YInput';
import './main.styl';

export default defineComponent({
  name: 'App',
  setup() {
    const change = (value: string) => {
      console.log(value);
    };
    return () => (
      <>
        <h1>这就是 Vue 的 TSX 神话 </h1>
        <h2>又是一个标题</h2>
        <div>
          <YInput value={'23'} onChange={change}></YInput>
        </div>
        <div id="nav">
          <RouterLink to="/">Home</RouterLink> |<RouterLink to="/about">About</RouterLink>
        </div>
        <RouterView />
      </>
    );
  },
});
