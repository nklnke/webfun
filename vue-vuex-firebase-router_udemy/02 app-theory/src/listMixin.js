export default {
  data() {
    return {
      search: "",
      names: ["sika", "kaka", "piska", "sraka"]
    };
  },
  computed: {
    filterNames() {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.search) !== -1;
      });
    }
  },
  created() {
    console.log("created");
  }
};
