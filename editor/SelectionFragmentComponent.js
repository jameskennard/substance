import Component from '../dom/Component'

export default class SelectionFragmentComponent extends Component {
  render ($$) {
    // TODO: we should rename se-cursor to sc-cursor
    const el = $$('span').addClass('se-selection-fragment')
    if (this.props.collaborator) {
      const collaboratorIndex = this.props.collaborator.colorIndex
      el.addClass('sm-collaborator-' + collaboratorIndex)
    } else {
      el.addClass('sm-local-user')
    }
    el.append(this.props.children)
    return el
  }
}
