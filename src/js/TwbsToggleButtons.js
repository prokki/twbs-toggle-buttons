/** @preserve Twitter Bootstrap Toogle Buttons 0.0.1
 * Available under the MIT license.
 * See https://github.com/prokki/twbs-toggle-buttons for more information.
 */

/**
 *
 * @param {Object} $element - jQuery object container of the related DOM element
 * @param {Object} options  - initial options
 *
 * @property {Object}                  _options                   - properties of SelectableTable
 * @property {boolean}                 _options.allowNone         - all elements which can be selected
 * @property {string}                  _options.classActive       - all elements which can be selected
 * @property {Array.<string>}          _options.twbsClassActive   - all elements which can be selected
 * @property {Array.<string>}          _options.twbsClassDeactive - all elements which can be selected
 * @property {Object|Array.<function>} _options.events            - all elements which can be selected
 *
 * @constructor
 */
function TwbsToggleButtons($element, options)
{

	/*******************************************************************************
	 *** properties
	 *******************************************************************************/

	this.$_element = $element;

	/*******************************************************************************
	 *** methods
	 *******************************************************************************/

	/**
	 *
	 * @private
	 */
	this._initializeOptions = function(options)
	{
		this._options = $.extend({}, TwbsToggleButtons.DEFAULTS, options || {});

		if( typeof this._options.twbsClassActive === "string" )
		{
			this._options.twbsClassActive = [this._options.twbsClassActive];
		}

		if( typeof this._options.twbsClassDeactive === "string" )
		{
			this._options.twbsClassDeactive = [this._options.twbsClassDeactive];
		}
	};

	/**
	 *
	 * @param {HTMLElement} active_button
	 * @private
	 */
	this._resetDOM = function(active_button)
	{
		this.$_element.find("[role='button']").each(function(_, _button)
		{
			if( _button === active_button )
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
	this._initializeDOM = function()
	{
		let active_button = this.$_element.find("[role='button']").filter("." + this._options.classActive);

		if( active_button.length > 1 )
		{
			throw "Only one element with class '" + this._options.classActive + "' allowed within a twbsToggleButton group.";
		}
		else if( active_button.length === 0 && !this._options.allowNone )
		{
			throw "If option 'allowNone' is set to false, an element must get class '" + this._options.classActive + "'.";
		}
		else if( active_button.length === 1 )
		{
			this._resetDOM(active_button.get(0));
		}
	};

	/**
	 *
	 * @param {Event} e
	 * @returns {boolean}
	 * @private
	 */
	this._eventClick = function(e)
	{
		let active_button = e.currentTarget;

		if( active_button.classList.contains(this._options.classActive) )
		{
			return false;
		}

		this._resetDOM(active_button);

		return true;
	};

	/**
	 *
	 * @param {HTMLElement} button
	 * @private
	 */
	this._activateButton = function(button)
	{

		if( button.dataset.twbsToggleButtonsClassActive !== undefined && button.dataset.twbsToggleButtonsClassActive.length > 0 )
		{
			button.classList.add(button.dataset.twbsToggleButtonsClassActive);
		}
		else
		{
			this._options.twbsClassActive.forEach(function(__class)
			{
				button.classList.add(__class);
			});
		}


		this._options.twbsClassDeactive.forEach(function(__class)
		{
			button.classList.remove(__class);
		});

		button.classList.add(this._options.classActive);
	};

	/**
	 *
	 * @param {HTMLElement} button
	 * @private
	 */
	this._deactivateButton = function(button)
	{

		if( button.dataset.twbsToggleButtonsClassActive !== undefined && button.dataset.twbsToggleButtonsClassActive.length > 0 )
		{
			button.classList.remove(button.dataset.twbsToggleButtonsClassActive);
		}

		this._options.twbsClassActive.forEach(function(__class)
		{
			button.classList.remove(__class);
		});

		this._options.twbsClassDeactive.forEach(function(__class)
		{
			button.classList.add(__class);
		});

		button.classList.remove(this._options.classActive);
	};

	this._initializeOptions(options);

	this._initializeDOM();

	this.$_element.find("[role='button']").on("click", this._eventClick.bind(this));

	this.$_element.data("twbsToggleButtons", this);
}

TwbsToggleButtons.DEFAULTS = {
	allowNone: false,
	classActive: "active",
	twbsClassActive: "btn-success",
	twbsClassDeactive: "btn-secondary"
};
