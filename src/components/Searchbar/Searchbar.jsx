import { Component } from 'react';
import style from './Searchbar.module.css';
import { ImSearch } from 'react-icons/im';

export default class Searchbar extends Component {
  render() {
    return (
      <header className={style.Searchbar}>
        <form className={style.Searchform} onSubmit={this.props.onSubmit}>
          <button type="submit" className={style['SearchForm-button']}>
            <ImSearch />
          </button>
          <input
            className={style['SearchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="палаючий Кремль..."
          />
        </form>
      </header>
    );
  }
}
