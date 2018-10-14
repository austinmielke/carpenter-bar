import React, { Component } from "react";

export default class Footer extends Component {
  getYear = () => new Date().getFullYear();

  render() {
    return (
      <footer>
        <p className="py-12 italic text-center text-gold">
          &copy; {this.getYear()} Carpenter Bar | Site by Austin Mielke
        </p>
      </footer>
    );
  }
}
