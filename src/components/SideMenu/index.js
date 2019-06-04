import React, { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  background-color: #fff;
  max-width: 13rem;
  padding: 1rem;
  position: fixed;
`

class Card extends React.Component {
  constructor() {
    super()

    this.state = {
      showMenu: false,
    }

    this.showMenu = this.showMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  showMenu(event) {
    event.preventDefault()

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu)
    })
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu)
      })
    }
  }

  render() {
    return (
      <Container>
        <button onClick={this.showMenu}>Show menu</button>

        {this.state.showMenu ? (
          <div
            className="menu"
            ref={element => {
              this.dropdownMenu = element
            }}
          >
            <button> Menu item 1 </button>
            <button> Menu item 2 </button>
            <button> Menu item 3 </button>
          </div>
        ) : null}
      </Container>
    )
  }
}

export default Card
