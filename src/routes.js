import React, { Component }  from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AboutPage from './pages/about/AboutPage';
import HomePage from './pages/home/HomePage';
import GearPage from './pages/gear/GearPage';
import SpellContainer from './pages/spells/SpellContainer';
import HealingTouch from './pages/spells/HealingTouch';
import Rejuvenation from './pages/spells/Rejuvenation';
import Regrowth from './pages/spells/Regrowth';
import GreaterHeal from './pages/spells/GreaterHeal';
import FlashHeal from './pages/spells/FlashHeal';
import Renew from './pages/spells/Renew';
import FlashOfLight from './pages/spells/FlashOfLight';
import HolyNova from './pages/spells/HolyNova';
import Heal from './pages/spells/Heal';
import PrayerOfHealing from './pages/spells/PrayerOfHealing';
import LesserHealingWave from './pages/spells/LesserHealingWave';
import HealingWave from './pages/spells/HealingWave';
import ChainHeal from './pages/spells/ChainHeal';
import ShadowBolt from './pages/spells/ShadowBolt';
import NotFoundPage from './pages/not-found/NotFoundPage';
import ResistancesContainer from './pages/resistances/ResistancesContainer';
import ArmorContainer from './pages/armor/ArmorContainer';

const publicPath = '/';

class Routes extends Component {
    render() {
      return (
        <HashRouter>
          <Switch>
              <Route exact path={ publicPath } component={ HomePage } />
              <Route exact path="/home" component={ HomePage } />
              <Route exact path="/resistances" component={ ResistancesContainer } />
              <Route exact path="/armor" component={ ArmorContainer } />
              <Route exact path="/gear" component={ GearPage } />
              <Route path="/spell" component={ SpellContainer } />
              <Route path="/healing-touch" component={ HealingTouch } />
              <Route path="/rejuvenation" component={ Rejuvenation } />
              <Route path="/regrowth" component={ Regrowth } />
              <Route path="/greater-heal" component={ GreaterHeal } />
              <Route path="/flash-heal" component={ FlashHeal } />
              <Route path="/renew" component={ Renew } />
              <Route path="/flash-of-light" component={ FlashOfLight } />
              <Route path="/heal" component={ Heal } />
              <Route path="/holy-nova" component={ HolyNova } />
              <Route path="/prayer-of-healing" component={ PrayerOfHealing } />
              <Route path="/lesser-healing-wave" component={ LesserHealingWave } />
              <Route path="/healing-wave" component={ HealingWave } />
              <Route path="/chain-heal" component={ ChainHeal } />
              <Route path="/shadow-bolt" component={ ShadowBolt } />

              <Route exact path="/about" component={ AboutPage } />
              <Route path='*' component={ NotFoundPage } />
          </Switch >
        </HashRouter>
      );
    }
  }
  
  export default Routes;