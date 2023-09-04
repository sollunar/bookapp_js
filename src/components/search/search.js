import { DivComponent } from "../../common/div-component.js";
import "./search.css";

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  search() {
    const value = this.el.querySelector("input").value;
    this.state.searchQuery = value;
  }

  render() {
    this.el.classList.add("search");
    this.el.innerHTML = `
      <div class="search__wrapper">
          <input 
              type="text"
              placeholder="Find book or author" 
              class="search__input" 
              value="${this.state.searchQuery ? this.state.searchQuery : ""}"
          />
          <img src="/static/search.svg" alt="search icon"/>
      </div>
      <button  aria-label="find">
          <img src="/static/search-white.svg" alt="search icon">
      </button>
    `;
    this.el
      .querySelector("button")
      .addEventListener("click", this.search.bind(this));
    this.el.querySelector("input").addEventListener("keydown", (event) => {
      if (event.code === "Enter") {
        this.search();
      }
    });

    return this.el;
  }
}
