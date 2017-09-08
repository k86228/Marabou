/*********************                                                        */
/*! \file PiecewiseLinearCaseSplit.cpp
** \verbatim
** Top contributors (to current version):
**   Guy Katz
** This file is part of the Marabou project.
** Copyright (c) 2016-2017 by the authors listed in the file AUTHORS
** in the top-level source directory) and their institutional affiliations.
** All rights reserved. See the file COPYING in the top-level source
** directory for licensing information.\endverbatim
**/

#include "PiecewiseLinearCaseSplit.h"
#include <cstdio>

void PiecewiseLinearCaseSplit::storeBoundTightening( const Tightening &tightening )
{
    _bounds.append( tightening );
}

List<Tightening> PiecewiseLinearCaseSplit::getBoundTightenings() const
{
    return _bounds;
}

void PiecewiseLinearCaseSplit::addEquation( const Equation &equation, EquationType type )
{
	_equations.append( Pair<Equation, EquationType>( equation, type ) );
}

List<Pair<Equation, PiecewiseLinearCaseSplit::EquationType> > PiecewiseLinearCaseSplit::getEquations() const
{
	return _equations;
}

void PiecewiseLinearCaseSplit::dump() const
{
    printf( "\nDumping piecewise linear case split\n" );
    printf( "\tBounds are:\n" );
    for ( const auto &bound : _bounds )
    {
        printf( "\t\tVariable: %u. New bound: %.2lf. Bound type: %s\n",
                bound._variable, bound._value, bound._type == Tightening::LB ? "lower" : "upper" );
    }

    printf( "\n\tEquations are:\n" );
    for ( const auto &equation : _equations )
    {
        printf( "\t\t" );
        equation.first().dump();
    }
}

//
// Local Variables:
// compile-command: "make -C .. "
// tags-file-name: "../TAGS"
// c-basic-offset: 4
// End:
//