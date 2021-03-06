<?php

// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.


/**
 * Atto text editor integration version file.
 *
 * @package    atto_pumukitmedia
 * @copyright  Teltek Video Research
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || exit();

/**
 * Initialise the strings required for js.
 */
function atto_pumukitmedia_strings_for_js()
{
    global $PAGE;

    $strings = [
        'dialogtitle',
        'button_upload',
        'button_pr',
        'button_myvideos',
        'button_playlists',
        'button_sharevideos',
    ];

    $PAGE->requires->strings_for_js($strings, 'atto_pumukitmedia');
}

/**
 * Return the js params required for this module.
 *
 * @param mixed $elementid
 * @param mixed $options
 * @param mixed $fpoptions
 */
function atto_pumukitmedia_params_for_js($elementid, $options, $fpoptions)
{
    global $USER;

    $params = [];

    $params['pumukitmediaurl'] = get_config('atto_pumukitmedia', 'pumukitmediaurl');
    $params['dialogtitle'] = get_config('atto_pumukitmedia', 'dialogtitle');
    $params['username'] = $USER->username;
    $params['email'] = $USER->email;
    $params['showpr'] = get_config('atto_pumukitmedia', 'showpr');
    $params['showplaylist'] = get_config('atto_pumukitmedia', 'showplaylist');
    $params['showsharedvideos'] = get_config('atto_pumukitmedia', 'showsharedvideos');
    $params['enabledebugmode'] = get_config('atto_pumukitmedia', 'enabledebugmode');

    $date = date('d/m/Y');
    $password = get_config('atto_pumukitmedia', 'password');
    $domain = parse_url($params['pumukitmediaurl'], PHP_URL_HOST);
    $hash = md5($USER->username.$password.$date.$domain);
    $params['hash'] = $hash;

    if($params['enabledebugmode'] == 1) {
        $params['password'] = base64_encode(get_config('atto_pumukitmedia', 'password'));
    }

    $params['date'] = $date;
    $params['capability'] = get_capability();

    return $params;
}

function get_capability()
{
    global $COURSE;

    $context = context_course::instance($COURSE->id);

    return has_capability('atto/pumukitmedia:view', $context);
}
