import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, propTypes, getFormValues } from 'redux-form';
import HealingContainer from './HealingContainer';
import * as talents from './talents';
import * as spells from './spells';
import '../style.css';

class prayerOfHealing extends Component {

  componentWillMount() {
    this.props.initialize({
      healing: 500,
      crit: 15,
    });
  }

  render() {
    return (
      <HealingContainer
        spell={ spells.prayerOfHealing }
        talents={ [
          talents.spiritualHealing,
          talents.improvedPrayerOfHealing,
          talents.amplifyMagic,
        ] }
        formValues={ this.props.formValues }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    formValues: getFormValues('prayerOfHealing')(state),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
  }, dispatch),
});

prayerOfHealing.propTypes = propTypes;

export default reduxForm({ form: 'prayerOfHealing' })(connect(mapStateToProps, mapDispatchToProps)(prayerOfHealing));
