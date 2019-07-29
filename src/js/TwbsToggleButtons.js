/** @preserve Twitter Bootstrap Toogle Buttons 0.0.3
 * Available under the MIT license.
 * See https://github.com/prokki/twbs-toggle-buttons for more information.
 */

/**
 * @class
 *
 * @property {Object}         $_element                - the associated jquery DOM element
 * @property {Object}         _options                 - properties of the TwbsToggleButtons container
 * @property {string}         _options.twbsBtnSelector - current button selector
 * @property {Array.<string>} _options.classActive     - a class (a string) or an array of class of active buttons
 * @property {Array.<string>} _options.classInactive   - a class (a string) or an array of class of inactive buttons
 */
class TwbsToggleButtons
{

	/**
	 *
	 * @returns {number}
	 */
	static TYPE_RADIO()
	{
		return 1;
	}

	/**
	 *
	 * @returns {number}
	 */
	static TYPE_CHECKBOX()
	{
		return 2;
	}

	/**
	 *
	 * @returns {{
	 *     twbsBtnSelector: string,
	 *     classActive: string,
	 *     classInactive: string
	 * }}
	 */
	static DEFAULTS()
	{
		return {
			twbsBtnSelector: "[role='button']",
			classActive: "btn-success",
			classInactive: "btn-secondary"
		};
	};

	/**
	 *
	 * @returns {string}
	 */
	static ACTIVE_CLASS()
	{
		return "active";
	}

	/**
	 * @param {Object} $element - jQuery object container of the related DOM element
	 * @param {Object} options  - initial options
	 */
	constructor($element, options)
	{
		this.$_element = $element;

		this._initializeOptions(options);

		this._initializeDOM();

		this.$_element.find(this._options.twbsBtnSelector).on("click", this._eventClick.bind(this));

		this.$_element.data("twbsToggleButtons", this);
	}

	_getInputType()
	{
		let radios = 0;
		let checkboxes = 0;

		this.$_element.find(":input").each(function ()
		{
			if ( this.getAttribute("type") === "radio" )
			{
				radios++;
			}
			else if ( this.getAttribute("type") === "checkbox" )
			{
				checkboxes++;
			}
			else
			{
				throw "All input fields must be either of type 'radio' or of type 'checkbox, found '" + this.getAttribute("type") + "'";
			}
		});

		if ( radios !== 0 && checkboxes !== 0 )
		{
			throw "All input fields must be either of type 'radio' or of type 'checkbox, found both.";
		}

		// use 'radio' if no input fields are included
		return (checkboxes > 0) ? TwbsToggleButtons.TYPE_CHECKBOX() : TwbsToggleButtons.TYPE_RADIO();
	};

	/**
	 *
	 * @private
	 */
	_initializeOptions(options)
	{
		this._options = $.extend({}, TwbsToggleButtons.DEFAULTS(), options || {});

		if ( typeof this._options.classActive === "string" )
		{
			this._options.classActive = [ this._options.classActive ];
		}

		if ( typeof this._options.classInactive === "string" )
		{
			this._options.classInactive = [ this._options.classInactive ];
		}
	};

	/**
	 *
	 * @param {Array<HTMLElement>} active_buttons
	 * @private
	 */
	_resetDOM(active_buttons)
	{
		this.$_element.find(this._options.twbsBtnSelector).each(function (_, _button)
		{
			if ( active_buttons.indexOf(_button) !== -1 )
			{
				this._activateButton(_button);
			}
			else
			{
				this._deactivateButton(_button);
			}
		}.bind(this));
	};

	/**
	 *
	 * @private
	 */
	_initializeDOM()
	{
		let buttons = this.$_element.find(this._options.twbsBtnSelector);

		let active_buttons = buttons.filter("." + TwbsToggleButtons.ACTIVE_CLASS()).toArray();

		if ( active_buttons.length > 1 && this._getInputType() === TwbsToggleButtons.TYPE_RADIO() )
		{
			active_buttons = [ active_buttons.pop() ];
		}

		// (re)set the "aria-pressed" attribute, because this attribute is determining whether
		// the button is active or not
		buttons.each(function (_, _button)
		{
			if ( active_buttons.indexOf(_button) !== -1 )
			{
				_button.setAttribute("aria-pressed", "true");
			}
			else
			{
				_button.setAttribute("aria-pressed", "false");
			}
		}.bind(this));

		this._resetDOM(active_buttons);
	};

	/**
	 *
	 * @param {Event} e
	 * @returns {boolean}
	 * @private
	 */
	_eventClick(e)
	{
		let current_active_buttons = this.$_element.find(this._options.twbsBtnSelector).filter(function ()
		{
			return this.getAttribute("aria-pressed") === "true";
		}).toArray();

		let clicked_button = e.currentTarget;

		// TYPE_RADIO
		if ( this._getInputType() === TwbsToggleButtons.TYPE_RADIO() )
		{
			current_active_buttons = [ clicked_button ];

			// deactivate active button if it is allowed to have no active button
			if ( clicked_button.getAttribute("aria-pressed") === "true" )
			{
				if ( this.$_element.find(this._options.twbsBtnSelector).find(":input[required]").length === 0 )
				{
					current_active_buttons = [];
				}
				else
				{
					e.stopPropagation();
				}
			}

		}
		// TYPE_CHECKBOX
		else
		{
			if ( clicked_button.getAttribute("aria-pressed") === "true" && current_active_buttons.indexOf(clicked_button) !== -1 )
			{
				current_active_buttons.splice(current_active_buttons.indexOf(clicked_button), 1);
			}
			else
			{
				current_active_buttons.push(clicked_button);
			}
		}

		this._resetDOM(current_active_buttons);

		window.setTimeout(function ()
		{
			e.target.dispatchEvent(new Event("twbsToggleButtons:activate"));
		}, 0);

		return true;
	};

	/**
	 *
	 * @param {HTMLElement} button
	 * @private
	 */
	_activateButton(button)
	{
		if ( button.dataset.twbsToggleButtonsClassActive !== undefined && button.dataset.twbsToggleButtonsClassActive.length > 0 )
		{
			button.classList.add(button.dataset.twbsToggleButtonsClassActive);
		}
		else
		{
			this._options.classActive.forEach(function (__class)
			{
				button.classList.add(__class);
			});
		}

		this._options.classInactive.forEach(function (__class)
		{
			button.classList.remove(__class);
		});

		$(button).find(":input").prop("checked", true);
		$(button).find(":input").attr("checked", "checked");

		// workaround on radio and checkbox button:
		// the attribute "aria-pressed" stays on "false" (even if the attribute is changed furthermore),
		// add the attribute manually with setTimeout() function 
		if ((this._getInputType() === TwbsToggleButtons.TYPE_RADIO() || this._getInputType() === TwbsToggleButtons.TYPE_CHECKBOX()) && button.getAttribute("aria-pressed") === "false" )
		{
			window.setTimeout(function ()
			{
				button.classList.remove(TwbsToggleButtons.ACTIVE_CLASS());
				button.setAttribute("aria-pressed", "true");
			}, 0);
		}
	};

	/**
	 *
	 * @param {HTMLElement} button
	 * @private
	 */
	_deactivateButton(button)
	{
		if ( button.dataset.twbsToggleButtonsClassActive !== undefined && button.dataset.twbsToggleButtonsClassActive.length > 0 )
		{
			button.classList.remove(button.dataset.twbsToggleButtonsClassActive);
		}

		this._options.classActive.forEach(function (__class)
		{
			button.classList.remove(__class);
		});

		this._options.classInactive.forEach(function (__class)
		{
			button.classList.add(__class);
		});

		$(button).find(":input").prop("checked", false);
		$(button).find(":input").attr("checked", null);

		// workaround on radio and checkbox button:
		// the attribute "aria-pressed" stays on "true" (even if the attribute is changed furthermore),
		// remove the attribute manually with setTimeout() function 
		if ((this._getInputType() === TwbsToggleButtons.TYPE_RADIO() || this._getInputType() === TwbsToggleButtons.TYPE_CHECKBOX()) && button.getAttribute("aria-pressed") === "true" )
		{
			window.setTimeout(function ()
			{
				button.classList.remove(TwbsToggleButtons.ACTIVE_CLASS());
				button.setAttribute("aria-pressed", "false");
			}, 0);
		}
	};

}