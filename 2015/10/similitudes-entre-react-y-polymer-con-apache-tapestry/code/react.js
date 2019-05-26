var TareaComponent = React.createClass({
    componentDidMount: function() {
        var _this = this;
        this.ui = {
            completada: $('input[name=completada]', this.getDOMNode())
        };
        
        this.ui.completada.change(function(event) {
            _this.props.tarea.toogle();
            _this.props.tarea.save();
        });
    },      
    render: function() {
//          return (
//              <label className="checkbox">
//                  <input type="checkbox" name="completada" checked={(this.props.tarea.get('completada'))?'checked':''}/> <span className={this.props.tarea.completada}>{this.props.tarea.get('descripcion')}</span>
//              </label>
//          );
        return React.DOM.label({className:'checkbox'},
            React.DOM.input({type:'checkbox', name:'completada', checked:(this.props.tarea.get('completada'))?'checked':''}),
            React.DOM.span({className:this.props.tarea.completada}, this.props.tarea.get('descripcion'))
        );
    }
});