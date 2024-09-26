import { AbilityBuilder } from '@casl/ability'

import { AppAbility } from '.'
import { User } from './models/user'
import { Role } from './roles'

type PermissionsByRole = (
  user: User,
  builder: AbilityBuilder<AppAbility>,
) => void

export const permissions: Record<Role, PermissionsByRole> = {
  ADMIN: (user, { can, cannot }) => {
    can('manage', 'all')
    cannot('return', 'Order')
    can('return', 'Order', {
      status: {
        $in: [
          'PENDING_OPEN',
          'OPEN',
          'MARKING',
          'PENDING_MARKING',
          'PENDING_XRAY',
          'XRAY',
          'IN_PROGRESS',
          'DOCUMENTING',
          'REVIEWING',
        ],
      },
    })
    cannot('book', 'Order')
    can('book', 'Order', {
      employeeWorking: {
        $in: [user.id],
      },
    })
    cannot('cancel', 'Order')
    can('cancel', 'Order', {
      status: {
        $nin: ['CANCELED', 'CONCLUDED', 'DRAFT', 'INVALID'],
      },
    })
    cannot('pending', 'Order')
    can('pending', 'Order', {
      status: {
        $in: ['ANALYSIS', 'DOCUMENTING', 'REVIEWING'],
      },
    })
    cannot('upload:file', 'Order')
    can('upload:file', 'Order', {
      status: {
        $nin: ['CANCELED', 'CONCLUDED', 'INVALID'],
      },
    })
    cannot('work', 'Order')
    can('work', 'Order', {
      status: {
        $in: [
          'PENDING_OPEN',
          'OPEN',
          'MARKING_XRAY',
          'PENDING_MARKING_XRAY',
          'MARKING',
          'PENDING_MARKING',
          'PENDING_XRAY',
          'XRAY',
          'DOCUMENTATION',
          'PENDING_DOCUMENTATION',
          'REVIEW',
        ],
      },
    })
    can('work', 'Order', {
      employeeWorking: {
        $in: [user.id],
      },
    })
  },
  SUPERVISOR: (user, { can, cannot }) => {
    can('manage', 'all')
    cannot('return', 'Order')
    can('return', 'Order', {
      status: {
        $in: [
          'PENDING_OPEN',
          'OPEN',
          'MARKING',
          'PENDING_MARKING',
          'PENDING_XRAY',
          'XRAY',
          'IN_PROGRESS',
          'DOCUMENTING',
          'REVIEWING',
        ],
      },
    })
    cannot('book', 'Order')
    can('book', 'Order', {
      employeeWorking: [user.id],
    })
    cannot('cancel', 'Order')
    can('cancel', 'Order', {
      status: {
        $nin: ['CANCELED', 'CONCLUDED', 'DRAFT', 'INVALID'],
      },
    })
    cannot('pending', 'Order')
    can('pending', 'Order', {
      status: {
        $in: ['ANALYSIS', 'DOCUMENTING', 'REVIEWING'],
      },
    })
    cannot('upload:file', 'Order')
    can('upload:file', 'Order', {
      status: {
        $nin: ['CANCELED', 'CONCLUDED', 'INVALID'],
      },
    })
    cannot('work', 'Order')
    can('work', 'Order', {
      status: {
        $in: [
          'PENDING_OPEN',
          'OPEN',
          'MARKING_XRAY',
          'PENDING_MARKING_XRAY',
          'MARKING',
          'PENDING_MARKING',
          'PENDING_XRAY',
          'XRAY',
          'DOCUMENTATION',
          'PENDING_DOCUMENTATION',
          'REVIEW',
        ],
      },
    })
    can('work', 'Order', {
      employeeWorking: {
        $in: [user.id],
      },
    })
  },
  BILLING: (user, { can }) => {
    can('get', 'User', {
      id: user.id,
    })
    can(['get', 'update'], 'Employee', {
      ownerId: user.id,
    })
    can('manage', 'Billing')
  },
  AGENT: (user, { can }) => {
    can('get', 'User', {
      id: user.id,
    })
    can('get:active', ['Customer', 'Service'])
    can('get', 'Sla')
    can(['get', 'update'], 'Employee', {
      ownerId: user.id,
    })
    can('get:all', 'Order')
    can('get', 'Order', {
      status: {
        $in: user.permissions,
      },
    })
    can('work', 'Order', {
      status: { $in: user.permissions },
    })
    can('work', 'Order', {
      employeeWorking: {
        $in: [user.id],
      },
    })
    can(['get', 'get:file', 'return', 'book', 'upload:file'], 'Order', {
      employeeWorking: {
        $in: [user.id],
      },
    })
    can('pending', 'Order', {
      employeeWorking: {
        $in: [user.id],
      },
      status: {
        $in: ['ANALYSIS', 'DOCUMENTING', 'REVIEWING'],
      },
    })
    can('upload', 'Storage')
  },
  CUSTOMER: (user, { can }) => {
    can('get', 'User', {
      id: user.id,
    })
    can('get:active', ['Service', 'Customer'])
    can('update', 'Patient', {
      createdBy: user.id,
    })
    can('update', 'Customer', {
      ownerId: user.id,
    })
    can('create', 'Order')
    can(['get', 'get:file', 'update', 'upload:file'], 'Order', {
      clinicId: user.id,
    })
    can(['get', 'get:file', 'update', 'upload:file'], 'Order', {
      doctorId: user.id,
    })
    can('upload:file', 'Order', {
      createdByUserId: user.id,
    })
    can('upload', 'Storage')
  },
  USER: (user, { can }) => {
    can('get', 'User', {
      id: user.id,
    })
    can('update', 'Patient', {
      ownerId: user.id,
    })
    can(['get', 'get:file'], 'Order', {
      patientId: user.id,
    })
  },
}
