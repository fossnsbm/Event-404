<template>
  <v-expansion-panels focusable>
    <v-expansion-panel v-for="pane in panes" :key="pane">
      <v-expansion-panel-header class="h1 font-weight-bold">{{
        pane.title
      }}</v-expansion-panel-header>
      <v-expansion-panel-content class="h5 font-weight-normal p-3">
        {{ pane.content }}
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import {} from "mdbvue";
export default {
  name: "FaqAccordion",
  components: {},
  data() {
    return {
      panes: [
        {
          title: "Collapsible Group Item #1",
          content: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                      3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                      Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                      Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                      Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable.`,
        },
        {
          title: "Collapsible Group Item #2",
          content: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                      3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                      Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                      Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                      Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable.`,
        },
        {
          title: "Collapsible Group Item #3",
          content: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                      3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                      Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                      Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                      Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable.`,
        },
        {
          title: "Collapsible Group Item #4",
          content: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                      3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                      Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                      Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                      Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable.`,
        },
        {
          title: "Collapsible Group Item #5",
          content: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                      3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                      Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                      Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                      Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable.`,
        },
      ],
    };
  },
};
</script>
