import fs from 'fs';
import { Activity } from '../models/activity';
import { Supplier } from '../models/supplier';
import { ActivityWithSupplierName } from '../models/activityWithSupplier';

export class ActivitiesService {
  private activitiesData: Activity[];
  private suppliersData: Supplier[];

  constructor() {
    this.activitiesData = JSON.parse(fs.readFileSync('./src/data/activities.json', 'utf8'));
    this.suppliersData = JSON.parse(fs.readFileSync('./src/data/suppliers.json', 'utf8'));
  }

  public getAllActivities(): ActivityWithSupplierName[] {
    const activitiesWithSuppliers: ActivityWithSupplierName[] = this.activitiesData.map((activity: Activity) => {
      const supplier: Supplier | undefined = this.suppliersData.find((supplier: Supplier) => supplier.id === activity.supplierId);
      const supplierName: string = supplier ? supplier.name : '';
      return {
        ...activity,
        supplierName,
      };
    });

    return activitiesWithSuppliers;
  }

  public searchActivitiesByTitle(searchTerm: string): ActivityWithSupplierName[] {
    const filteredActivities: Activity[] = this.activitiesData.filter((activity: Activity) =>
      activity.title.toLowerCase().includes(searchTerm)
    );

    const activitiesWithSuppliers: ActivityWithSupplierName[] = filteredActivities.map((activity: Activity) => {
      const supplier: Supplier | undefined = this.suppliersData.find((supplier: Supplier) => supplier.id === activity.supplierId);
      const supplierName: string = supplier ? supplier.name : '';
      return {
        ...activity,
        supplierName,
      };
    });

    return activitiesWithSuppliers;
  }
}

