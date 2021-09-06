import React from 'react';
import _ from 'lodash';

import { htmlToReact, markdownify } from '../utils';

export default class SectionContact extends React.Component {
  render() {
    let section = _.get(this.props, 'section', null);
    return (
      <section
        id={_.get(section, 'section_id', null)}
        className={
          'block contact-block bg-' +
          _.get(section, 'background', null) +
          ' outer'
        }
      >
        <div className='block-header inner-small'>
          {_.get(section, 'title', null) && (
            <h2 className='block-title'>{_.get(section, 'title', null)}</h2>
          )}
          {_.get(section, 'subtitle', null) && (
            <p className='block-subtitle'>
              {htmlToReact(_.get(section, 'subtitle', null))}
            </p>
          )}
        </div>
        <div className='block-content inner-medium'>
          {markdownify(_.get(section, 'content', null))}
        </div>
      </section>
    );
  }
}
