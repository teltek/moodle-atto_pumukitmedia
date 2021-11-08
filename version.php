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
 * Plugin version file
 *
 * @package    atto_pumukitpr
 * @copyright  Teltek Video Research
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || exit();

// PumukitPR plugin version
$plugin->version = 2021110801;

// PumukitPR moodle require version
$plugin->requires = 2016112900;

// PumukitPR maturity
$plugin->maturity = MATURITY_STABLE;

// PumukitPR plugin full name
$plugin->component = 'atto_pumukitpr';

// PumukitPR plugin dependencies
$plugin->dependencies = [
    'filter_pumukitpr' => 2021110801
];

// PumukitPR release
$plugin->release = '1';

