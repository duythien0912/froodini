import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ItemList from '../List/ItemList';


export class ItemListPage extends React.Component {

    constructor() {
        super();

        this.state = {selectedCourseId: undefined};

        this.handleAddCourse = this.handleAddCourse.bind(this);
        this.handleEditCourse = this.handleEditCourse.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleRowSelect = this.handleRowSelect.bind(this);
    }


    componentDidMount() {
        this.props.action.getCoursesAction()
            .catch(error => {
                
            });
    }



    handleAddCourse() {
        this.props.history.push('/course');
    }



    handleEditCourse() {
        const selectedCourseId = this.state.selectedCourseId;

        if (selectedCourseId) {
            this.setState({selectedCourseId: undefined});            
            this.props.history.push(`/course/${selectedCourseId}`);
        }        
    }



    handleDelete() {
        const selectedCourseId = this.state.selectedCourseId;

        if (selectedCourseId) {
            this.setState({selectedCourseId: undefined});                        
            this.props.action.deleteCourseAction(selectedCourseId)
                .catch(error => {
                  
                });
        }
    }



    handleRowSelect(row, isSelected) {
        if (isSelected) {
            this.setState({selectedCourseId: row.id});
        }
    }



    render() {
        const { courses } = this.props;

        if (!courses) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col">
                        <h1>Courses</h1>                        
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <div className="btn-group" role="group">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={this.handleAddCourse}
                            >
                                <i className="fa fa-plus" aria-hidden="true"/> New
                            </button>

                            <button
                                type="button"
                                className="btn btn-warning ml-2"
                                onClick={this.handleEditCourse}                                
                            >
                                <i className="fa fa-pencil" aria-hidden="true"/> Edit
                            </button>                                

                            <button
                                type="button"
                                className="btn btn-danger ml-2"
                                onClick={this.handleDelete}
                            >
                                <i className="fa fa-trash-o" aria-hidden="true" onClick={this.handleDelete}/> Delete
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <ItemList courses={courses} handleRowSelect={this.handleRowSelect}/>
                    </div>
                </div>
            </div>
        );
    }
}



const mapStateToProps = state => ({
    courses: state.coursesReducer.courses
});



const mapDispatchToProps = dispatch => ({
    // action: bindActionCreators(courseAction, dispatch)

});




ItemListPage.propTypes = {
    courses: []
};



export default connect(mapStateToProps, mapDispatchToProps)(ItemListPage);
