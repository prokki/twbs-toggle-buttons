(function($)
	{
		if( $.fn.twbsToggleButtons == null )
		{

			$.fn.twbsToggleButtons = function(options)
			{

				// All methods that should return the element
				var methods = ["clear", "destroy"];

				options = options || {};

				if( typeof options === "object" )
				{
					this.each(function()
					{
						var instanceOptions = $.extend(true, {}, options);

						var instance = null;

						if( $(this).data("twbsToggleButtons") === undefined )
						{
							instance = new TwbsToggleButtons($(this), instanceOptions);
						}
						else
						{
							instance = $(this).data("twbsToggleButtons");

							if( instance === null && window.console && console.error )
							{
								console.warn("Error on Initialization as TwbsToggleButtons: " + this);
							}
						}
					});

					return this;
				}
				else if( typeof options === "string" )
				{
					var return_value;

					var args = Array.prototype.slice.call(arguments, 1);

					this.each(function()
					{
						var instance = $(this).data('twbsToggleButtons');

						if( instance == null && window.console && console.error )
						{
							console.error(
								"The twbsToggleButtons('" + options + "') method was called on an " +
								"element that is not using TwbsToggleButtons."
							);
						}
						else if( typeof instance[options] !== "function" )
						{
							console.error(
								"Method '" + options + "' is not implemented in TwbsToggleButtons."
							);
						}

						return_value = instance[options].apply(instance, args);

					});

					// check if we should be returning `this`
					if( $.inArray(options, methods) > -1 )
					{
						return this;
					}

					return return_value;
				}
				else
				{
					throw new Error('Invalid arguments for TwbsToggleButtons: ' + options);
				}
			}

		}
	}(jQuery)
);